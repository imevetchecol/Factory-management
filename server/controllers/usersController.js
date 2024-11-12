const express = require('express');
const userService = require('../services/userService');

const router = express.Router();

// Get All users
router.get('/', async (req, res) => {
  try {
    const filters = req.query;
    const users = await userService.getAllUsers(filters)
    res.json(users);
  } catch (error) {
    res.json(error);
  }
});

// Get a user By ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    res.json(user);
  } catch (error) {
    res.json(error);
  }
});

// Add a new user
router.post('/', async (req, res) => {
    try {
      const obj = req.body;
      const result = await userService.addUsersToDb(obj)
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error.message);
    }
  });

// Update a User
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await userService.updateUser(id, obj);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;