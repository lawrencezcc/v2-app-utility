'use strict';

const tfnUtility = require('../../../utils/tfn/tfn');

module.exports = (req, res) => {
  return res.json({ tfn: tfnUtility.getTFN() });
};
