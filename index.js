// index.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let users = [];

// Create a new user
app.post('/users', (req, res) => {
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.status(201).send(user);
});

// Get all users
app.get('/users', (req, res) => {
  res.send(users);
});

// Get a user by ID
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');
  res.send(user);
});

// Update a user by ID
app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');

  user.name = req.body.name;
  user.email = req.body.email;
  res.send(user);
});

// Delete a user by ID
app.delete('/users/:id', (req, res) => {
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  if (userIndex === -1) return res.status(404).send('User not found');

  const deletedUser = users.splice(userIndex, 1);
  res.send(deletedUser);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});