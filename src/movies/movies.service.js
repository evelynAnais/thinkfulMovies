const knex = require('../db/connection');

function list() {
  return knex('movies').select('*');
}

// function listShowingTrue() {
//   return knex('movies_theaters')
//     .join('movies', 'movies_theaters.movie_id', 'movies.movie_id')
//     .select('*') 
//     .where({ 'is_showing': true } )
//     .groupBy('movies.title');
//     //.orderBy('movies_theaters.movie_id');
// }

function listShowingTrue() {
  return knex('movies')
    .join('movies_theaters', 'movies.movie_id', 'movies_theaters.movie_id')
    .select('movies.*') 
    .where({ 'is_showing': true } )
    .groupBy('movies.title', 'movies.movie_id');
    //.orderBy('movies_theaters.movie_id');
}

function read(movie_id) {
  return knex('movies').select('*').where({ movie_id }).first();
}

module.exports = {
  list,
  listShowingTrue,
  read,
}