const express = require("express");
const router = express.Router();

const todoController = require("../controllers/todo");

// Create a new todo item
router.post("/", todoController.createTodo);

// Get all todo items
router.get("/", todoController.getAllTodos);

// Get a specific todo item by ID
router.get("/:id", todoController.getTodoById);

// Update a specific todo item by ID
router.put("/:id", todoController.updateTodoById);

// Delete a specific todo item by ID
router.delete("/:id", todoController.deleteTodoById);

module.exports = router;