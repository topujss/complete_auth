const errorHandler = (err, req, res, next) => {
  const sCode = res.statusCode ? res.statusCode : 500;
  res.status(sCode).json({ msg: err.message });
};

module.exports = errorHandler;
