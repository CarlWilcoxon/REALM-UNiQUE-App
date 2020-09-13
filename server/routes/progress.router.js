const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

// Get route for each realm
//CREATING A NEW STUDENT PROGRESS ENTRY
router.get('/get-save/:realm', (req, res) => {
  console.log(req.user.id, req.params);
  const queryText =
    `SELECT * FROM "student_progress"
    WHERE "user_id" = $1 AND "realm_id" = $2`
  const queryValues = [ req.user.id, req.params.realm ]

  pool
    .query(queryText, queryValues)
    .then((result) => {
      // console.log('in /get-save GET', result.rows[0]);
      res.send(result.rows[0]);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});


//CREATING A NEW STUDENT PROGRESS ENTRY
router.post('/create-save', (req, res) => {
  const queryText =
  `INSERT INTO "student_progress" ("user_id", "realm_id", "section_id")
  VALUES ( $1 , $2 , $3 );`;

  const queryValues = [
    req.user.id,
    req.body.realmId,
    req.body.sectionId
  ]

  pool
    .query(queryText, queryValues)
    .then(() => {
      // console.log('in /create-save POST');
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

// UPDATING STUDENT PROGRESS ENTRY
router.put('/update-save', (req, res) => {
  const queryText =
  `UPDATE "student_progress"
  SET "section_id" = $1
  WHERE "user_id" = $2 AND "realm_id" = $3;`;

  const queryValues = [
    req.body.sectionId,
    req.user.id,
    req.body.realmId
  ]

  pool
    .query(queryText, queryValues)
    .then(() => {
      // console.log('in /update-save PUT');
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

// UPDATING STUDENT PROGRESS ENTRY
router.put('/update-save/completed', (req, res) => {
  const queryText =
  `UPDATE "student_progress"
  SET "completed" = TRUE, "section_id" = NULL, "started" = FALSE
  WHERE "user_id" = $1 AND "realm_id" = $2;`;

  const queryValues = [
    req.user.id,
    req.body.realmId
  ]

  pool
    .query(queryText, queryValues)
    .then(() => {
      // console.log('in /update-save PUT');
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

// UPDATING STUDENT PROGRESS ENTRY
router.put('/update-form', (req, res) => {
  const queryText =
  `UPDATE "student_progress"
  SET "started" = $4
  WHERE "section_id" = $1 AND "user_id" = $2 AND "realm_id" = $3;`;

  const queryValues = [
    req.body.sectionId,
    req.user.id,
    req.body.realmId,
    true
  ]

  pool
    .query(queryText, queryValues)
    .then(() => {
      // console.log('in /update-form PUT');
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});


module.exports = router;
