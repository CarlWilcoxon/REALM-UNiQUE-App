const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

// Get route for each realm
router.get('/get', (req, res) => {
  console.log('Getting progress for', req.user);

  const queryText =
  `SELECT * FROM "student_progress"
  WHERE "realm"."id"= $1 AND "user"."id" = $2
  ORDER BY "realm"."id" ASC;`;
  const queryValue = [ req.body.realmId, req.body.userId ];

  pool
    .query(queryText, queryValue)
    .then((result) => {
      console.log('in /answer/get GET', result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});


// TODO write post routes for student responses and feedback

//POST ROUTE FOR CREATING A NEW REALM WITH SECTIONS IN ORDER DESIRED
router.post('/feedback/add',  async (req, res) => {
  // console.log( "in post route:", req.body );

  const realm = req.body.realm;
  const chosenSections = req.body.chosenSections;
  const connection = await pool.connect();

  try {
    await connection.query('BEGIN');
    const addRealmQuery = `INSERT INTO "realm" ("realm_name", "description", "cover_photo")
    VALUES ($1, $2, $3) RETURNING "id"`;
    // SAVE RESULT TO USE REALM ID
    const result = await connection.query(addRealmQuery, [
      realm.name,
      realm.description,
      realm.photoLink,
    ]);
    const realmId = result.rows[0].id;
    // console.log(realmId);

    // LOOP THROUGH CHOSEN SECTIONS INTO SECTION ORDER TABLE
    for (let i = 0; i < chosenSections.length; i++) {
      const orderSectionQuery = `INSERT INTO "section_order" ("realm_id", "index", "section_id")
          VALUES ($1, $2, $3);`;
      await connection.query(orderSectionQuery, [
        realmId,
        i,
        chosenSections[i].id,
      ]);
    }

    await connection.query('COMMIT');
    res.sendStatus(200);
  } catch (err) {
    console.log('error on transfer', err);
    await connection.query('ROLLBACK');
    res.sendStatus(500);
  } finally {
    connection.release();
  }
});


router.post('/add', async (req, res) => {


})


module.exports = router;
