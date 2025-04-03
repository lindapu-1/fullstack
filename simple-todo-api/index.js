const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Temporary data storage
let todos = [
  { id: 1, task: "Learn Express.js" },
  { id: 2, task: "Build API project" }
];

// Routes will go here

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

app.get('/todos', (req, res) => {
    res.status(200).json({
      success: true,
      count: todos.length,
      data: todos
    });
  });

// app.get('/', (req, res) => {
//     res.send('Welcome to the Simple Todo API!');
//   });

app.post('/todos', (req, res) => {
const { task } = req.body;

if (!task) {
    return res.status(400).json({
    success: false,
    error: "Please provide a task"
    });
}

const newTodo = {
    id: todos.length + 1,
    task,
    completed: false,
    createdAt: new Date().toISOString()
};

todos.push(newTodo);
res.status(201).json({ success: true, data: newTodo });
});

app.put('/todos/:id', (req, res) => {
const { id } = req.params;
const { task, completed } = req.body;

const todoIndex = todos.findIndex(t => t.id === Number(id));

if (todoIndex === -1) {
    return res.status(404).json({
    success: false,
    error: `No todo with id ${id}`
    });
}

// Update allowed fields
if (task) todos[todoIndex].task = task;
if (typeof completed === 'boolean') {
    todos[todoIndex].completed = completed;
}

res.json({ success: true, data: todos[todoIndex] });
});

app.delete('/todos/:id', (req, res) => {
const { id } = req.params;

const initialLength = todos.length;
todos = todos.filter(t => t.id !== Number(id));

if (todos.length === initialLength) {
    return res.status(404).json({
    success: false,
    error: `No todo with id ${id}`
    });
}

res.status(204).send();
});

