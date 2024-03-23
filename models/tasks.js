const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  // this iis the overall schema
  name: {
    type: String,
    required: [true, 'Must provide name'],
    trim: true,
    maxlength: [40, 'Name cannot be more than 40 characters'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Task', taskSchema); // Here we've created Task Collection name.
// we have exported to controller but we could also create document here like this
//const tank = await Tank.create({ size: 'small' });
