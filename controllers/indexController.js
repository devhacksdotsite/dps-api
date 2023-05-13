const indexModel = require('../models/indexModel');

exports.getIndex = (req, res) => {
  const data = indexModel.getData();
  res.send({ data });
};