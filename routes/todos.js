const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Todo = require('../models/Todo');

/**
 * @route  GET api/todos
 * @desc   Get all todos
 * @access Public
 */
router.get('/', async (req, res) => {
  try {
    // find all todos in the database
    const todos = await Todo.find();

    // return them as json
    res.json(todos);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Internal Server Error');
  }
});

/**
 * @route  POST api/todos/add
 * @desc   Add todo
 * @access Public
 */
router.post(
  '/add',
  [
    check('title', 'Title is required')
      .not()
      .isEmpty(),
    check('completed', 'Completed is required')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);

    // throw a bad request error and return array os errors if they exist
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, completed } = req.body;

    try {
      // create new todo object
      const todo = new Todo({
        title,
        completed
      });

      // save it to the database
      await todo.save();

      // return new todo as json
      res.json(todo);
    } catch (error) {
      console.log(error.message);
      res.status(500).send('Internal Server Error');
    }
  }
);

module.exports = router;
