const Task = require('../models/tasks');

const getAllTasks = async (req, res) => {
  try {
    const task = await Task.find({});
    res.status(200).json({ task });
  } catch (error) {}
};
const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params; // we've req.params.id // now the id is aliased as taskID
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `No task with ID: ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const updateTask = (req, res) => {
  res.end('Updating a single task');
};
const deleteTask = (req, res) => {
  res.end('deleting a single task');
};
module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask };
