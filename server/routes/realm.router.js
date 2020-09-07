const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  console.log('Getting realm for', req.user);
  const queryText = `SELECT * FROM "user"
                      JOIN "project" ON "user"."project_id" = "project"."id"
                      JOIN "realm" ON "project"."id" = "realm"."project_id"
                      JOIN "student_progress" ON "user"."id" = "student_progress"."user_id"
                      WHERE user_id= $1
                      ORDER BY "section_order"."index" ASC`;
  pool.query(queryText, [req.user.id])
    .then((result) => res.send(result.rows))
    .catch(() => res.sendStatus(500));
});

// Get route for each Realm
router.get('/:id', rejectUnauthenticated, async (req, res) => {
  console.log('Getting realm for', req.user);
  const queryText = `SELECT * FROM "user"`
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
// router.post('/', rejectUnauthenticated, (req, res) => {

// });


// Route for creating a new Realm
router.post('/', rejectUnauthenticated, async (req, res) => {
  const realmName = req.body.realmName;
  const coverPhotoLink = req.body.coverPhotoLink;
  const realmDescription = req.body.realmDescription;

  // COMMENT ME OUT ONCE THIS ROUTE WORKS
  console.log('req.body:', req.body);

  const connection = await pool.connect()
  try {
    await connection.query('BEGIN');
    const addRealmQuery = `INSERT INTO "realm" ("realm_name", "description", "cover_photo")
    VALUES ($1, $2, $3) RETURNING "id"`;
    // Save the result so we can get the returned value
    const result = await connection.query( addRealmQuery, [realmName, realmDescription, coverPhotoLink]);
    // Get the id from the result - will have 1 row with the id
    const realmId = result.rows[0].id;

    const addsectionQuery = `INSERT INTO "section" ("type")
    VALUES ($1) RETURNING "id"`;
    // Save the result so we can get the returned value
    const sectionResponse = await connection.query( addsectionQuery, [5] ); // 5 means form
    // Get the id from the result - will have 1 row with the id
    const sectionId = sectionResponse.rows[0].id;

    // Loop through the form questions
    for ( let i = 0; i < req.body.questions.length; i++ ) {
      // Insert an entry into section_order to keep track of question order
      const addOrderQuery =
      `INSERT INTO "section_order" ("realm_id", "index", "section_id")
      VALUES ($1, $2, $3);`;
      const addOrderValues = [realmId, i, sectionId ];

      await connection.query( addOrderQuery, addOrderValues );

      // Insert question into question db
      const addQuestionQuery =
      `INSERT INTO "question" ("section_id", "content")
      VALUES ($1, $2 ) RETURNING "id";`;
      const addQuestionValues = [sectionId, req.body.questions[i].question ]

      const questionResponse = await connection.query( addQuestionQuery, addQuestionValues );
      const questionId = questionResponse.rows[0].id;

      // If the question is multiple choice...
      // if (req.body.questions[i].questionType === 'multiple_choice') {
      //   // ...loop through the array of answers, inserting each into the 'multiple_choice' db
      //   for (let j = 0; j < req.body.questions[i].answers.length; j++) {
      //     const thisAnswer = req.body.questions[i].answers[j];
      //     const choiceQuery =
      //     `INSERT INTO "multiple_choice" ("question_id", "content", "correct_answer")
      //     VALUES ($1, $2, $3);`;
      //     const choiceValues = [questionId, thisAnswer.content, thisAnswer.correct_answer ];

      //     await connection.query( choiceQuery, choiceValues );

      //   }

      // }
    }

    await connection.query('COMMIT');
    res.sendStatus(201);
  } catch ( error ) {
    await connection.query('ROLLBACK');
    console.log(`Transaction Error - Rolling back new account`, error);
    res.sendStatus(500);
  } finally {
    connection.release()
  }

});

//GETTING ALL REALMS FOR "VIEW REALMS" PAGE
router.get("/every", (req, res) => {
  // router.get("/all", rejectUnauthenticated, (req, res) => {
  const queryText = `SELECT * FROM "realm";`;
  pool
    .query(queryText)
    .then((result) => {
      console.log("in /realm GET");
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
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