const knex = require('../db/connection');

function list() {
  return knex('movies').select('*')
}

// function listShowingTrue() {
//   return knex('movies')
//     .join('movies_theaters', 'movies.movie_id', 'movies_theaters.movie_id')
//     .select(
//       'movies.id',
//       'movies.title',
//       'movies.runtime_in_minutes',
//       'movies.rating',
//       'movies.description',
//       'movies.image_url',
//     ) 
//     .where({ 'is_showing': true } )
//     //.distinct('')
// }

function listShowingTrue() {
  return knex('movies_theaters')
    .leftJoin('movies', 'movies_theaters.movie_id', 'movies.movie_id')
    .select('*') 
    .where({ 'is_showing': true } )
    .groupBy('movies.title')
}

module.exports = {
  list,
  listShowingTrue,
}