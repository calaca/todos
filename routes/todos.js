const express = require('express');
const router = express.Router();

/**
 * @route GET api/todos
 * @desc Get all todos
 * @access Public
 */
router.get('/', (req, res) => res.send('Get all todos route'));

module.exports = router;
