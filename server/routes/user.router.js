const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', async (req, res) => {

  console.log('req.body:', req.body);
  const connection = await pool.connect()

  try {
    await connection.query('BEGIN');

    // Deconstructing req.body
    const {
      username,
      first_name,
      last_name,
      email,
      state,
      age,
      ethnicity,
      gender,
      income,
      education_level,
      reg_code = null,
      } = req.body;

    const password = encryptLib.encryptPassword(req.body.password);
    const queryText = `INSERT INTO "user" ("username", "password") VALUES ($1, $2) RETURNING id;`
    // add the user and save the user's new user id
    const new_user_id = await connection.query(queryText, [username, password])

    if (reg_code === process.env.SUPER_SECRET_ADMIN_CODE) {
      const adminQuery =
      `UPDATE "user"
      SET "admin" = TRUE
      WHERE "user"."id" = $1;`
      await connection.query(adminQuery, [new_user_id.rows[0].id])
    }

    // use the user id to add their demographics to the 'demographic' table

    const demoQuery =
    `INSERT INTO "demographic" (
      "user_id",
      "first_name",
      "last_name",
      "email",
      "location",
      "age",
      "gender",
      "ethnicity_id",
      "income_level_id",
      "education_level_id" )
    VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10 );`;

    const demoValues= [
      new_user_id.rows[0].id,
      first_name,
      last_name,
      email,
      state,
      age,
      gender,
      ethnicity,
      income,
      education_level ];

    await connection.query(demoQuery, demoValues);

    await connection.query('COMMIT');
    res.sendStatus(201)

} catch ( error ) {
    await connection.query('ROLLBACK');
    console.log(`Transaction Error - Rolling back new account`, error);
    res.sendStatus(500);

} finally {
      connection.release()
  }

});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
