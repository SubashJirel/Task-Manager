require('./db/connect');
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const notFound = require('./middleware/notFound');
const connectDB = require('./db/connect');
require('dotenv').config();

//middleware
app.use(express.static('./public'));
app.use(express.json());

// All the routes
app.use('/api/v1/tasks', tasks);

//Not found
app.use(notFound);

const port = 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`App is listening on the port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();
