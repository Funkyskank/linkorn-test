const errorHandler = (routeHandler) => {
  return async function (req, res, next) {
    try {
      await routeHandler(req, res, next);
    } catch (err) {
      //if (err.name == 'SequelizeConnectionError') return res.status(500).send({error: "it's a connection error"});
      res.status(500).send(err);
    }
  }
};

module.exports = {
  errorHandler,
};
