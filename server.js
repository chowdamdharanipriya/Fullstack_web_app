const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let users = [];
let tasks = [];

// Signup
app.post('/signup', (req, res) => {
  const { email, password, role } = req.body;
  users.push({ email, password, role });
  res.send("User created");
});

// Login
app.post('/login', (req, res) => {
  const user = users.find(u => u.email === req.body.email && u.password === req.body.password);
  if (!user) return res.status(400).send("Invalid");
  res.send(user);
});

// Create Task
app.post('/tasks', (req, res) => {
  const { title, assignedTo, status, dueDate } = req.body;
  tasks.push({ id: tasks.length + 1, title, assignedTo, status, dueDate });
  res.send("Task created");
});

// Get Tasks
app.get('/tasks', (req, res) => {
  res.send(tasks);
});

// Update Task
app.put('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);
  if (!task) return res.status(404).send("Not found");
  task.status = req.body.status;
  res.send("Updated");
});

app.listen(5000, () => console.log("Server running on port 5000"));