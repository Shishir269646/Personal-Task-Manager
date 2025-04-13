const express = require("express");
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  toggleTaskCompletion,
} = require("../controllers/task.controller");

const { protect } = require("../middleware/auth.middleware");

const router = express.Router();

// All routes below are protected by JWT middleware

// @desc    Get all tasks for logged-in user
// @route   GET /api/tasks
router.get("/", protect, getTasks);

// @desc    Create a new task
// @route   POST /api/tasks
router.post("/", protect, createTask);

// @desc    Update a task
// @route   PUT /api/tasks/:id
router.put("/:id", protect, updateTask);

// @desc    Delete a task
// @route   DELETE /api/tasks/:id
router.delete("/:id", protect, deleteTask);

// @desc    Toggle task completion status
// @route   PATCH /api/tasks/:id/complete
router.patch("/:id/complete", protect, toggleTaskCompletion);

module.exports = router;
