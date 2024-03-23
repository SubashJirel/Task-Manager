const Task = require('../models/tasks');
const { createCustomError } = require('../Error/customError');

const asyncWrapper = require('../middleware/async');
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});
const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params; // we've req.params.id // now the id is aliased as taskID
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return next(createCustomError(` naya: No task with ID: ${taskID}`, 404));
  }
  res.status(200).json({ task });
});
const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});
const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createCustomError(` naya: No task with ID: ${taskID}`, 404));
  }
  res.status(200).json({ task });
});
const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(createCustomError(` naya: No task with ID: ${taskID}`, 404));
  }
  res.status(200).json(task);
  //since we don't need to send back deleted task we can do one of the following
  // res.status(200).send()
  // res.status(200).json({task:null,status:success})
});
module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask };
