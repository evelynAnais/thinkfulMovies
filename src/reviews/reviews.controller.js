const service = require('./reviews.service');
const asyncErrorBoundary = require('../errors/asyncErrorBoundary');

async function reviewExists(req, res, next) {
  const review = await service.read(req.params.reviewId);
  if (review) {
    res.locals.review = review;
    return next();
  }
  next({ status: 404, message: `Review cannot be found.` })
}

async function list(req, res) {
  res.json({ data: await service.list(req.params.movieId) });
}

async function destroy(req, res) {
  await service.destroy(res.locals.review.review_id);
  res.sendStatus(204);
}

module.exports = {
  list: [asyncErrorBoundary(list)],
  delete: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(destroy)],
}