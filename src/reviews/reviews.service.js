const knex = require('../db/connection');
const mapProperties = require('../utils/map-properties');

const addCritic = mapProperties({
  critic_id: 'critic.critic_id',
  preferred_name: 'critic.preferred_name',
  surname: 'critic.surname',
  organization_name: 'critic.organization_name',
  created_at: 'critic.created_at',
  updated_at: 'critic.updated_at'
})

function list(movieId) {
  return knex('reviews')
    .join('critics', 'reviews.critic_id', 'critics.critic_id')
    .select(
      "reviews.review_id",
      "reviews.content",
      "reviews.score",
      "reviews.created_at",
      "reviews.updated_at",
      "reviews.critic_id",
      "reviews.movie_id",
      'critics.*'
    )
    .where({ 'reviews.movie_id': movieId })
    .then((data) => data.map((i) => addCritic(i)));
}

function read(review_id) {
  return knex('reviews').select('*').where({ review_id }).first();
}

function destroy(review_id) {
  return knex('reviews').where({ review_id }).del();
}

module.exports = {
  list,
  read,
  destroy,
}