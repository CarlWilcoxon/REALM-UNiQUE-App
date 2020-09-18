const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticatedAdmin,
} = require('../modules/authentication-middleware');

// Get curriculum
router.get('/get/curriculum', rejectUnauthenticatedAdmin, (req, res) => {
  console.log('Getting curriculum for', req.user);

  const queryText = `SELECT (realm.realm_name) AS realm_name,
  (realm.description) AS realm_description,(realm.cover_photo) AS realm_cover_photo,
  (section.title) AS section_name, (resource_type.type_name) AS section_type,
  (section.video_link) AS video, (section.image_link) AS image,(section.text_content) AS "text",
  (section.description) AS section_description,  (question.content) AS section_question FROM resource_type
   JOIN section ON section.type = resource_type.id LEFT JOIN question ON question.section_id = section.id
   LEFT JOIN section_order ON section_order.section_id = section.id JOIN realm ON realm.id = realm_id
  ORDER BY realm.realm_name;`;

  pool
    .query(queryText)
    .then((result) => {
      console.log('in /answer/get GET', result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

// Get demographics
router.get('/get/demographics', rejectUnauthenticatedAdmin, (req, res) => {
  console.log('Getting demographics for', req.user);

  const queryText = `SELECT demographic.user_id,demographic.first_name,
  demographic.last_name, demographic.email, demographic.age, demographic.location,
  demographic.gender, (ethnicity.ethnicity) As ethnicity, (income_level.range) AS income_level,
  (education_level.education_level) AS education_level FROM demographic
  JOIN ethnicity ON ethnicity.id = ethnicity_id
  JOIN income_level ON income_level.id = income_level_id
  JOIN education_level ON education_level.id = education_level_id
  ORDER BY user_id ASC;`;

  pool
    .query(queryText)
    .then((result) => {
      console.log('in /answer/get GET', result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

// Get feedback
router.get('/get/feedback', rejectUnauthenticatedAdmin, (req, res) => {
  console.log('Getting feedback for', req.user);

  const queryText = `SELECT student_response.user_id, demographic.first_name,
  (realm.realm_name) AS realm, COALESCE(section.title, 'Realm Feedback:') AS section,
  COALESCE(question.content,'How do you feel about the course?') AS question,
  student_response.response, student_response.feedback_score,
   student_response.date_submitted FROM student_response
  JOIN demographic ON demographic.user_id = student_response.user_id
  JOIN realm ON realm.id = realm_id
  LEFT JOIN section ON section.id = section_id
  LEFT JOIN question ON question.id = question_id
  ORDER BY date_submitted ASC;`;

  pool
    .query(queryText)
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
