const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

// Get route for each realm
router.get('/get-realm/:realm', async (req, res) => {
  console.log('Getting realm for', req.user);

  const connection = await pool.connect();

  try {
    await connection.query('BEGIN');

    const queryText =
    `SELECT * FROM "realm"
    WHERE "realm"."id"= $1
    ORDER BY "realm"."id" ASC;`;
    const queryValue = [ req.params.realm ];
    let result = await connection.query(queryText, queryValue);

    // Get the sections for that realm
    const orderSectionQuery =
    `SELECT * FROM "section_order"
    WHERE "realm_id" = $1
    ORDER BY "index" ASC;`;
    let section = await connection.query (orderSectionQuery, [ req.params.realm ]);

    // Append the sections onto the result
    result.rows[0].section = section.rows;

    await connection.query('COMMIT');
    console.log('success!', result.rows[0]);
    res.send(result.rows[0]);

  } catch (error) {
    await connection.query('ROLLBACK');
    console.log(`Transaction Error - Rolling back new account`, error);
    res.sendStatus(500);

  } finally {
    connection.release();
  }
});


//OLD DON'T USE
// router.post('/', rejectUnauthenticated,  async (req, res) => {

//   const realmName = req.body.realmName;
//   const coverPhotoLink = req.body.coverPhotoLink;
//   const realmDescription = req.body.realmDescription;

//   // COMMENT ME OUT ONCE THIS ROUTE WORKS
//   console.log('req.body:', req.body);

//   const connection = await pool.connect();
//   try {
//     await connection.query('BEGIN');
//     const addRealmQuery = `INSERT INTO "realm" ("realm_name", "description", "cover_photo")
//     VALUES ($1, $2, $3) RETURNING "id"`;
//     // Save the result so we can get the returned value
//     const result = await connection.query(addRealmQuery, [
//       realmName,
//       realmDescription,
//       coverPhotoLink,
//     ]);
//     // Get the id from the result - will have 1 row with the id
//     const realmId = result.rows[0].id;

//     const addsectionQuery = `INSERT INTO "section" ("type")
//     VALUES ($1) RETURNING "id"`;
//     // Save the result so we can get the returned value
//     const sectionResponse = await connection.query(addsectionQuery, [5]); // 5 means form
//     // Get the id from the result - will have 1 row with the id
//     const sectionId = sectionResponse.rows[0].id;

//     // Loop through the form questions
//     for (let i = 0; i < req.body.questions.length; i++) {
//       // Insert an entry into section_order to keep track of question order
//       const addOrderQuery = `INSERT INTO "section_order" ("realm_id", "index", "section_id")
//       VALUES ($1, $2, $3);`;
//       const addOrderValues = [realmId, i, sectionId];

//       await connection.query(addOrderQuery, addOrderValues);

//       // Insert question into question db
//       const addQuestionQuery = `INSERT INTO "question" ("section_id", "content")
//       VALUES ($1, $2 ) RETURNING "id";`;
//       const addQuestionValues = [sectionId, req.body.questions[i].question];

//       const questionResponse = await connection.query(
//         addQuestionQuery,
//         addQuestionValues
//       );
//       const questionId = questionResponse.rows[0].id;

//       // If the question is multiple choice...
//       // if (req.body.questions[i].questionType === 'multiple_choice') {
//       //   // ...loop through the array of answers, inserting each into the 'multiple_choice' db
//       //   for (let j = 0; j < req.body.questions[i].answers.length; j++) {
//       //     const thisAnswer = req.body.questions[i].answers[j];
//       //     const choiceQuery =
//       //     `INSERT INTO "multiple_choice" ("question_id", "content", "correct_answer")
//       //     VALUES ($1, $2, $3);`;
//       //     const choiceValues = [questionId, thisAnswer.content, thisAnswer.correct_answer ];

//       //     await connection.query( choiceQuery, choiceValues );

//       //   }

//       // }
//     }

//     await connection.query('COMMIT');
//     res.sendStatus(201);
//   } catch (error) {
//     await connection.query('ROLLBACK');
//     console.log(`Transaction Error - Rolling back new account`, error);
//     res.sendStatus(500);
//   } finally {
//     connection.release();
//   }
// });  OLD DON'T USE

//GETTING ALL REALMS FOR "VIEW REALMS" PAGE
router.get('/all', (req, res) => {
  // router.get("/all", rejectUnauthenticated, (req, res) => {
  const queryText =
  `SELECT * FROM "realm"
  ORDER BY "realm"."id" ASC;`;

  pool
    .query(queryText)
    .then((result) => {
      console.log('in /realm GET');
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});


//POST ROUTE FOR CREATING A NEW REALM WITH SECTIONS IN ORDER DESIRED
router.post('/add-new-realm',  async (req, res) => {
  console.log( "in post route:", req.body );

  const realm = req.body.realm
  const chosenSections = req.body.chosenSections
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
    console.log(realmId);

    // LOOP THROUGH CHOSEN SECTIONS INTO SECTION ORDER TABLE
    for (let i = 0; i < chosenSections.length; i++) {
      const orderSectionQuery = `INSERT INTO "section_order" ("realm_id", "index", "section_id")
          VALUES ($1, $2, $3);`;
          await connection.query (orderSectionQuery, [realmId, i, chosenSections[i].id ])
    };

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

