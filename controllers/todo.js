const { Todo } = require('../models');


// create todo function
exports.createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        const todo = await Todo.create({ title, description });
        res.status(200).json({ message: 'Todo created successfully!'});
    } catch (error) {
        console.error('Error creating todo:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


// get all todos function
exports.getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.findAll();
        res.status(200).json({ message: 'Todos fetched successfully!', todos });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


// get todo by id function
exports.getTodoById = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findByPk(id);
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json({ message: 'Todo fetched successfully!', todo });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


// update todo by id function
exports.updateTodoById = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, completed } = req.body;

        const todo = await Todo.findByPk(id);
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        // Update the todo item
        todo.update({
            title: title || todo.title,
            description: description || todo.description,
            completed: completed !== undefined ? completed : todo.completed
        });

        res.status(200).json({ message: 'Todo updated successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


// delete todo by id function
exports.deleteTodoById = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findByPk(id);
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        await todo.destroy();
        res.status(200).json({ message: 'Todo deleted successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};