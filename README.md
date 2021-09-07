# We Love Movies

API to get info of movies playing at different theaters.

## Description

Built and API for a mock movie theater app.

## API Documentation

| Route       | Method      | Status Code | Description   |
| :---        |    :----:   |     :----:  |        ---:  |
| /theaters   | GET         | 200         | Returns a list of theaters |
| /movies     | GET         | 200         | Returns a list of movies |
| /movies/:movie_id  | GET  | 200         | Returns the movie of ID |
| /movies/:movie_id/reviews | GET  | 200  | Returns the reviews for the given movie ID |
| /movies/:movie_id/theaters| GET  | 200  | Returns the theater for the given movie ID |
| /reviews    | GET         | 200         | Returns a list of reviews |
| /reviews/:table_id  | PUT | 200         | Allows update of review by ID |
| /reviews/:table_id |DELETE| 200         | Deletes a review by ID |


### Installing

```
npm install
```

### Executing program

```
npm start
```

or to start with Nodemon
```
npm run start:dev
```
## Authors

Evelyn Ploughman

* [LinkedIn](https://www.linkedin.com/in/evelyn-ploughman/)
* [Twitter](https://twitter.com/evelynAnais44)