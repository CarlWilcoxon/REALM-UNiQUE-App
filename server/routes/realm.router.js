const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

// Get route for each realm
router.get('/get-realm/:realm', async (req, res) => {
  // console.log('Getting realm for', req.user);

  const connection = await pool.connect();

  try {
    await connection.query('BEGIN');

    const queryText = `SELECT * FROM "realm"
    WHERE "realm"."id"= $1
    ORDER BY "realm"."id" ASC;`;
    const queryValue = [req.params.realm];
    let result = await connection.query(queryText, queryValue);

    // Get the sections for that realm
    const orderSectionQuery = `SELECT * FROM "section_order"
    WHERE "realm_id" = $1
    ORDER BY "index" ASC;`;
    let section = await connection.query(orderSectionQuery, [req.params.realm]);

    // Append the sections onto the result
    result.rows[0].section = section.rows;

    await connection.query('COMMIT');
    // console.log('success!', result.rows[0]);
    res.send(result.rows[0]);
  } catch (error) {
    await connection.query('ROLLBACK');
    console.log(`Transaction Error - Rolling back new account`, error);
    res.sendStatus(500);
  } finally {
    connection.release();
  }
});


//GETTING ALL REALMS FOR "VIEW REALMS" PAGE
router.get('/all', (req, res) => {
  // router.get("/all", rejectUnauthenticated, (req, res) => {
  const queryText = `SELECT * FROM "realm"
  ORDER BY "realm"."id" ASC;`;

  pool
    .query(queryText)
    .then((result) => {
      console.log('in /realm/all GET');
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

//POST ROUTE FOR CREATING A NEW REALM WITH SECTIONS IN ORDER DESIRED
router.post('/add-new-realm',  async (req, res) => {
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

    const formQuery =
    `INSERT INTO "section" ("type")
    VALUES ( 5 ) RETURNING "id"`
    const tempResult = await connection.query(formQuery);

    const formId = tempResult.rows[0].id
    const formConnectionQuery =
    `INSERT INTO "section_order" ("realm_id", "index", "section_id")
    VALUES ($1, $2, $3);`;
    formConnectionValues = [
      realmId,
      0,
      formId
    ]
    await connection.query(formConnectionQuery, formConnectionValues);

    if (realm.questions !== undefined) {
      const questionPairs = Object.entries(realm.questions);
      console.log("questionPairs", questionPairs)

      for (question of questionPairs) {

        let qIndex = parseInt(question[0].substring(1));
        console.log("qIndex", qIndex);

        const questionQuery =
        `INSERT INTO "question" ("section_id", "question_index", "content")
        VALUES ($1, $2, $3 );`;
        const questionValues = [
          formId,
          qIndex,
          question[1]
        ]
        await connection.query(questionQuery, questionValues)
      }
    }


    // LOOP THROUGH CHOSEN SECTIONS INTO SECTION ORDER TABLE
    for (let i = 0; i < chosenSections.length; i++) {
      const orderSectionQuery =
      `INSERT INTO "section_order" ("realm_id", "index", "section_id")
      VALUES ($1, $2, $3);`;
      await connection.query(orderSectionQuery, [
        realmId,
        i+1,
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

module.exports = router;
