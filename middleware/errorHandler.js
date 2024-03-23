const { customAPIError } = require('../Error/customError');
const errorHandler = (err, req, res, next) => {
  if (err instanceof customAPIError) {
    //here the error is coming from middleware/async.js because in app.js we've used app.use(errorHandlerMiddleware); and next() in middleware/async.js  will simply run the next middleware
    return res.status(err.status).json({ msg: err.message });
  }
  return res.status(500).json({ msg: `Something went wrong please try again` });
};

module.exports = errorHandler;
