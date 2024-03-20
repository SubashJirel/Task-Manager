const getAllTasks = (req, res) => {
  res.end('all items');
};
const getTask = (req, res) => {
  res.json({ id: req.params.id });
};
const createTask = (req, res) => {
  res.json(req.body);
};
const updateTask = (req, res) => {
  res.end('Updating a single task');
};
const deleteTask = (req, res) => {
  res.end('deleting a single task');
};
module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask };
