const errorHandler = (err, req, res, next) => {
  console.error(err);

  const status = err.status || err.statusCode || 500;

  const isProd = process.env.NODE_ENV === 'production';

  res.status(status).json({
    message: isProd
      ? 'Something went wrong. Please try again later.'
      : err.message,
  });
};

export { errorHandler };
