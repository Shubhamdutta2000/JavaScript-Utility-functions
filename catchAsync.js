/**
 * Handle errors in Express middlewares and routes easily. No need of using try/catch blocks in async functions anymore.
 * @param {Function} fn Callback function
 * @example
 * catchAsync(async (req, res) => {
    res.status(200).json('Success');
})
 * @returns {Function} Callback function with the error handled
 * @author Bihan Chakraborty
*/

const catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => next(err));
  };
};

export default catchAsync;
