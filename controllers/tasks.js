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
const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ msg: `No task with ID: ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json(error);
  }
};
const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `No task with the id: ${taskID}` });
    }
    res.status(200).json(task);
    //since we don't need to send back deleted task we can do one of the following
    // res.status(200).send()
    // res.status(200).json({task:null,status:success})
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask };
