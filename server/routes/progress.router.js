const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

// Get route for each realm
//CREATING A NEW STUDENT PROGRESS ENTRY
router.get('/get-save', (req, res) => {
  const queryText =
    `SELECT * FROM "student_progress"
    WHERE "user_id" = $1 AND "realm_id" = $2`
  const queryValues = [ req.user.id, req.body.realmId ]

  pool
    .query(queryText, queryValues)
    .then((result) => {
      console.log('in /create-save GET');
      res.sendStatus(result.rows);
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
    req.body.realmId,
    req.user.id,
    req.body.sectionId
  ]

  pool
    .query(queryText, queryValues)
    .then(() => {
      console.log('in /create-save GET');
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});



module.exports = router;
