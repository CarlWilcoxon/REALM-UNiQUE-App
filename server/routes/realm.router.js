const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, async (req, res) => {
  console.log('Getting realm for', req.user);
  const queryText = `SELECT * FROM "user"
                      JOIN "project" ON "user"."project_id" = "project"."id"
                      JOIN "realm" ON "project"."id" = "realm"."project_id"
                      JOIN "student_progress" ON "user"."id" = "student_progress"."user_id"
                      WHERE user_id= $1
                      ORDER BY "internal_name" ASC`;
  pool.query(queryText, [req.user.id])
    .then((result) => res.send(result.rows))
    .catch(() => res.sendStatus(500));
});

// Get route to get each form question page.
router.get('/form/:id', rejectUnauthenticated, async (req, res) => {

});

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, (req, res) => {

});

module.exports = router;


// Example transaction used to make the rest of the router
// -------------------------------------------------------
// // Setup route for new account with balance
// router.post('/', async (req, res) => {
//   const name = req.body.name;
//   const amount = req.body.amount;
//   console.log(`Creating new account '${name}' with initial balance ${amount}`);

//   const connection = await pool.connect()
//   try {
//     await connection.query('BEGIN');
//     const sqlAddAccount = `INSERT INTO account (name) VALUES ($1) RETURNING id`;
//     // Save the result so we can get the returned value
//     const result = await connection.query( sqlAddAccount, [name]);
//     // Get the id from the result - will have 1 row with the id
//     const accountId = result.rows[0].id;
//     const sqlInitialDeposit = `INSERT INTO register (acct_id, amount) VALUES ($1, $2);`
//     await connection.query( sqlInitialDeposit, [accountId, amount]);
//     await connection.query('COMMIT');
//     res.sendStatus(200);
//   } catch ( error ) {
//     await connection.query('ROLLBACK');
//     console.log(`Transaction Error - Rolling back new account`, error);
//     res.sendStatus(500);
//   } finally {
//     connection.release()
//   }
// });