const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  // this iis the overall schema
  name: String,
  completed: Boolean,
});

module.exports = mongoose.model('Task', taskSchema); // Here we've created Task Collection name.
// we have exported to controller but we could also create document here like this
//const tank = await Tank.create({ size: 'small' });
