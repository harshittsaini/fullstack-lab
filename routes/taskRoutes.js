// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const {
    createTask,
    getTasks,
    updateTask,
    deleteTask,
} = require('../controllers/taskController');

// Route to create a task
router.post('/', createTask);

// Route to get all tasks for the logged-in user
router.get('/', getTasks);

// Route to update a task by ID
router.put('/:id', updateTask);

// Route to delete a task by ID
router.delete('/:id', deleteTask);

module.exports = router;
