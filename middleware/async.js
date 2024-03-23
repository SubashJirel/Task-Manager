const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error); // with next we pass the error to the next middle ware i.e. erroHandler middleware
    }
  };
};
module.exports = asyncWrapper;
