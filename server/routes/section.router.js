const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {

});

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, (req, res) => {

});

module.exports = router;