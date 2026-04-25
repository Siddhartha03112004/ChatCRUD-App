class ExpressError extends Error {
  constructor(status, message) {
    // constructor takes in status and message parameters
    super(); // call the parent class constructor (Error) to initialize the error object
    this.status = status;
    // set the status property of the error object to the provided status
    this.message = message;
  }
}

module.exports = ExpressError;
