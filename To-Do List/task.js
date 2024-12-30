const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Data storage
let tasks = [];
let nextId = 1;

app.get('/', (req, res) => {
    res.send('Welcome to my server!');
});

// Route to create a new task
app.post('/tasks', (req, res) => {
    const { title, description } = req.body;
    if (!title) {
        return res.status(400).json({ error: 'Title is required' });
    }
    const newTask = { id: nextId++, title, description: description || '', completed: false };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// Route to view all tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// Route to view a specific task by ID
app.get('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find((t) => t.id === taskId);
    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }
    res.json(task);
});

// Route to update a task by ID
app.put('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find((t) => t.id === taskId);
    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }
    const { title, description, completed } = req.body;
    if (title !== undefined) task.title = title;
    if (description !== undefined) task.description = description;
    if (completed !== undefined) task.completed = completed;
    res.json(task);
});

// Route to delete a task by ID
app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex((t) => t.id === taskId);
    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Task not found' });
    }
    tasks.splice(taskIndex, 1);
    res.status(204).send();
});

// Start the server
app.listen(port, () => {
    console.log(`To-Do List API running at http://localhost:${port}`);
});
