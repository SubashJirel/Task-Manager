const express = require('express');
const router = express.Router();
const {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/tasks');

router.get('/', getAllTasks);
router.get('/:id', getTask);
router.post('/:id', createTask);
router.patch('/:id', updateTask);
router.delete('/:id', deleteTask);

//could also do
// router.route('/:id').get(getTask).patch(updateTask).deleteTask(deleteTask)
module.exports = router;
