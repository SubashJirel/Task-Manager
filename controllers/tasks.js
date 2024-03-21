const Task = require('../models/tasks');

const getAllTasks = (req, res) => {
  res.end('all items');
};
const getTask = (req, res) => {
  res.json({ id: req.params.id });
};
const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
};
const updateTask = (req, res) => {
  res.end('Updating a single task');
};
const deleteTask = (req, res) => {
  res.end('deleting a single task');
};
module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask };
