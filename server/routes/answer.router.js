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



module.exports = router;
