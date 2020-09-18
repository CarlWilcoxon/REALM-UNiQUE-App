const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
  rejectUnauthenticatedAdmin,
} = require('../modules/authentication-middleware');

// Get route for each Section
router.get('/get-section/:section', rejectUnauthenticated, async (req, res) => {
  // console.log('Getting section for', req.user);

  const connection = await pool.connect();

  try {
    await connection.query('BEGIN');

    const queryText = `SELECT * FROM "section"
      WHERE "section"."id"= $1;`;
    const queryValue = [req.params.section];
    let result = await connection.query(queryText, queryValue);

    // get the questions for that section
    const addQuestionQuery = `SELECT * FROM "question"
    WHERE "section_id" = $1
    ORDER BY "question_index";`;
    const addQuestionValues = [req.params.section];

    const questionResponse = await connection.query(
      addQuestionQuery,
      addQuestionValues
    );
    // append the questions to the result
    result.rows[0].questions = questionResponse.rows;
    // console.log(questionResponse.rows);

    // send the section and question data back
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

// ADD ONE QUESTION TO THE DATABASE
router.post('/add-one-question', rejectUnauthenticatedAdmin, (req, res) => {
  console.log('Getting section for', req.user);
  const queryText = `INSERT INTO "question" ("section_id", "question_index")
  VALUES ( $1, $2 );`;
  const queryValues = [req.body.sectionId, req.body.qIndex];
  pool
    .query(queryText, queryValues)
    .then((result) => res.send(result.rows))
    .catch(() => res.sendStatus(500));
});

// UPDATE THE QUESTIONS IN THE DATABASE
router.put('/edit-questions', rejectUnauthenticatedAdmin, async (req, res) => {
  const connection = await pool.connect();

  try {
    await connection.query('BEGIN');
    console.log('req.body', req.body);

    // Outputs key value pairs of req.body.state in [[key1, value1], [key2, value2]...] format
    const questionPairs = Object.entries(req.body.changedQuestions);
    console.log('questionPairs', questionPairs);

    for (question of questionPairs) {
      let qId = parseInt(question[0].substring(1));
      console.log('questionID', qId);

      const questionQuery = `UPDATE "question"
      SET "content" = $1
      WHERE "question"."id" = $2`;
      const questionValues = [question[1], qId];
      await connection.query(questionQuery, questionValues);
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

// Route for creating a new Section
// router.post('/add', rejectUnauthenticatedAdmin, async (req, res) => {
router.post('/add', rejectUnauthenticatedAdmin, async (req, res) => {
  // Deconstructing most of req.body to make references later clearer to read.
  const {
    title,
    type,
    description,
    questions,
    imageLink = null,
    videoLink = null,
    textContent = null,
  } = req.body;
  // COMMENT ME OUT ONCE THIS ROUTE WORKS
  // console.log('req.body:', req.body);
  // console.log('title:', title);
  // console.log('type:', type);

  const connection = await pool.connect();
  try {
    await connection.query('BEGIN');
    const addSectionQuery = `INSERT INTO "section" ( "title", "type", "description", "image_link", "video_link", "text_content" )
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING "id"`;
    // Save the result so we can get the returned value
    const result = await connection.query(addSectionQuery, [
      title,
      type,
      description,
      imageLink,
      videoLink,
      textContent,
    ]);
    // Get the id from the result - will have 1 row with the id
    const sectionId = result.rows[0].id;

    const questionPairs = Object.entries(questions);
    console.log('questionPairs', questionPairs);

    for (question of questionPairs) {
      let questionId = parseInt(question[0].substring(8));
      console.log('questionID', questionId);

      const questionQuery = `INSERT INTO "question" ("section_id", "question_index", "content")
      VALUES ($1, $2, $3 );`;
      const questionValues = [sectionId, questionId, question[1]];
      await connection.query(questionQuery, questionValues);
    }

    {
      // // Loop through the questions
      // for (let i = 0; i < questions.length; i++) {
      //   // Insert question into question db
      //   const addQuestionQuery =
      //   `INSERT INTO "question" ("section_id", "question_index", "content")
      //   VALUES ($1, $2, $3 ) RETURNING "id";`;
      //   const addQuestionValues = [sectionId, i, questions[i]];
      //   const questionResponse = await connection.query(
      //     addQuestionQuery,
      //     addQuestionValues
      //   );
      //   const questionId = questionResponse.rows[0].id;
      /* If the question is multiple choice...
       if (req.body.questions[i].questionType === 'multiple_choice') {
         // ...loop through the array of answers, inserting each into the 'multiple_choice' db
         for (let j = 0; j < req.body.questions[i].answers.length; j++) {
           const thisAnswer = req.body.questions[i].answers[j];
           const choiceQuery =
           `INSERT INTO "multiple_choice" ("question_id", "content", "correct_answer")
           VALUES ($1, $2, $3);`;
           const choiceValues = [questionId, thisAnswer.content, thisAnswer.correct_answer ];

           await connection.query( choiceQuery, choiceValues );
         }
      } */
      // }
    }

    await connection.query('COMMIT');
    res.sendStatus(201);
  } catch (error) {
    await connection.query('ROLLBACK');
    console.log(`Transaction Error - Rolling back new account`, error);
    res.sendStatus(500);
  } finally {
    connection.release();
  }
});

router.get('/all', rejectUnauthenticated, (req, res) => {
  const queryText = `SELECT "section".*, "resource_type"."type_name" FROM "section"
  JOIN "resource_type" ON "section"."type" = "resource_type"."id"
  WHERE type = 1 OR type = 2 OR type = 3;;`;

  pool
    .query(queryText)
    .then((result) => {
      console.log('in /section GET');
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

// This route *should* DELETE an task for the logged in user
router.delete('/:id', rejectUnauthenticatedAdmin, (req, res) => {
  // router.delete('/:id', rejectUnauthenticated, (req, res) => {
  // const queryValues = [req.user.id, req.params.id];
  const queryValues = [
    // req.user.id
    req.params.id,
  ];
  pool
    //   .query(
    //     `DELETE FROM "section"
    //     WHERE $1 = section.user_id
    //      AND section.id = $2`,
    //     queryValues
    // )
    .query(
      `DELETE FROM "section"
    WHERE section.id = $1`,
      queryValues
    )
    .then((results) => res.sendStatus(200))
    .catch((err) => {
      console.log('error deleting item: ', err);
      console.log(
        'req.user.id and req.params.id',
        // req.user.id,
        req.params.id
      );

      res.sendStatus(500);
    });
});

router.put('/update', rejectUnauthenticated, (req, res) => {
  const {
    title,
    type,
    description,
    imageLink,
    videoLink,
    textContent,
  } = req.body;
  const id = req.body.sectionId;

  console.log('req.body is', req.body);
  const queryText = `UPDATE "section"
    SET
    "title"=$1,
    "type"=$2,
    "description"=$3,
    "image_link"=$4,
    "video_link"=$5,
    "text_content"=$6
    WHERE "id"=$7;`;
  pool
    .query(queryText, [
      title,
      type,
      description,
      imageLink,
      videoLink,
      textContent,
      id,
    ])
    .then((result) => {
      console.log('in /api/section PUT');
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`PUT error:`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
