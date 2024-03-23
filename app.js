require('./db/connect');
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const notFound = require('./middleware/notFound');
const errorHandlerMiddleware = require('./middleware/errorHandler');
const connectDB = require('./db/connect');
require('dotenv').config();

//middleware
app.use(express.static('./public'));
app.use(express.json());

// All the routes
app.use('/api/v1/tasks', tasks);

//Not found
app.use(notFound);
//error handler
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`App is listening on the port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();

// Note to self for some middle wares
/*
getTask Middleware: This middleware fetches a task by ID and send it as JSON in the response. If the task is not found, it passes the error to the next middleware using next(createCustomError(...)).

asyncWrapper Middleware: This middleware is a wrapper for asynchronous route handlers. It catches any errors that occur within the route handler function (fn) and passes them to the Express next() function.

errorHandler Middleware: This middleware catches errors passed to next() and sends an appropriate JSON response based on the type of error. If the error is an instance of customAPIError, it sends a JSON response with the provided status code and message. Otherwise, it sends a generic 500 status code with a generic error message.
*/
