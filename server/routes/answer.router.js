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
router.post('/feedback/add', async (req, res) => {

  const {
    realmId,
    sectionId,
  } = req.body
  const connection = await pool.connect();

  try {
    await connection.query('BEGIN');
    console.log('req.body', req.body)

    // Outputs key value pairs of req.body.state in [[key1, value1], [key2, value2]...] format
    const answerPairs = Object.entries(req.body.state);
    console.log("answerPairs", answerPairs)

    for (answer of answerPairs) {

      let questionId = parseInt(answer[0].substring(6));
      console.log("questionID", questionId);

      const answerQuery =
      `INSERT INTO "student_response" ( "user_id", "realm_id", "section_id", "question_id", "response" )
      VALUES ($1, $2, $3, $4, $5 );`
      const answerValues = [
        req.user.id,
        realmId,
        sectionId,
        questionId,
        answer[1]
      ]
      await connection.query(answerQuery, answerValues)
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


})


router.post('/add', async (req, res) => {

  const {
    realmId,
    sectionId,
  } = req.body
  const connection = await pool.connect();

  try {
    await connection.query('BEGIN');
    console.log('req.body', req.body)

    // Outputs key value pairs of req.body.state in [[key1, value1], [key2, value2]...] format
    const answerPairs = Object.entries(req.body.state);
    console.log("answerPairs", answerPairs)

    for (answer of answerPairs) {

      let questionId = parseInt(answer[0].substring(6));
      console.log("questionID", questionId);

      const answerQuery =
      `INSERT INTO "student_response" ( "user_id", "realm_id", "section_id", "question_id", "response" )
      VALUES ($1, $2, $3, $4, $5 );`
      const answerValues = [
        req.user.id,
        realmId,
        sectionId,
        questionId,
        answer[1]
      ]
      await connection.query(answerQuery, answerValues)
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


})


module.exports = router;
