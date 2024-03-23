class customAPIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.status = statusCode;
  }
}

const createCustomError = (msg, statusCode) => {
  return new customAPIError(msg, statusCode);
};

module.exports = { createCustomError, customAPIError };
