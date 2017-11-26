const { Client, Contract, Service } = require('../models');
const { errorHandler } = require('../utils/error-utils');

const list = async (req, res, next) => {
  const result = await Client.findAndCountAll({
    include: [{
      model: Contract,
      as: 'contracts',
      include: [{
        model: Service,
        as: 'services',
      }],
    }],
    order: [
      ['createdAt', 'DESC'],
      [{ model: Contract, as: 'contracts' }, 'createdAt', 'ASC']
    ],
    distinct: true // count only primary records (Clients)
  });
  res.status(200).json({
    count: result.count,
    data: result.rows
  });
};

module.exports = {
  list: errorHandler(list),
};
