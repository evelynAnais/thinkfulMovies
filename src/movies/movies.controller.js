const service = require('./movies.service');
const asyncErrorBoundary = require('../errors/asyncErrorBoundary');

async function list(req, res) {
  if (req.query.is_showing) {
  res.json({ data:await service.listShowingTrue() }); 
  } 
  res.json({ data:await service.list() });
}


module.exports = {
  list: asyncErrorBoundary(list),
}