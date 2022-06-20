# Endpoints

## /movies
Metoda | Endpoint | Description |
| -------- |--------  | -------------|
| GET | /        | Get all movies |
| GET | /name/:movie | Find movies with fuzzy search
| GET | /id/:movie | Get movie with specific mongoDB _id
| POST | /add     | Add a movie     | 
| GET | /date/:date | Get movies that have a screening at given date (/:date is a date in YYYY-MM-DD format)

## movie JSON
```
{
    movieName: String,
    movieDirector: String,
    movieLength: Number,
    movieDescription: String,
    movieReleaseYear: Number,
    moviePosterURL: String,
}
```
--------------------------------

## /users
|Metoda | Endpoint | Description |
|----------|---------| -----------|
| POST | /register | Register user |
| POST | /login | Login user |
| GET| /me | Get information about currently logged user|

## user JSON
```
{
    userEmail: String,
    userName: String,
    userPassword: String,
    userType: String,
}
```

## /screenings
|Metoda| Endpoint | Description |
|-------|---------| -----------|
| GET| / | Get all screenings
| GET| /movie/:movie | Get screenings for a movie (/:movie is _id of the movie)
| POST| /add | Add a screening
| DELETE | /delete | Delete a screening, by screening ID
| GET | /today | Get today screenings
| GET | /today/:movie | Get today screenings for a movie (/:movie is _id of the movie)
| GET | /seats/:screening | Get taken seats for a screening (/:screening is _id of the screening)
| GET | /date/:date | Get screenings by date (/:date is a date in YYYY-MM-DD)
| GET | /date/:date/:movie | Get screenigs by date for a movie (/:date is a date in YYYY-MM-DD, /:movie is _id of the movie)
## screening JSON

```
{
    screeningMovie: {
        movieName: String,
        movieDirector: String,
        movieLength: Number,
        movieDescription: String,
        movieReleaseYear: Number,
        moviePosterURL: String
    },
    screeningRoom: Number,
    screeningDate: Date,
    screeningPriceNormal: Number,
    screeningPriceReduced: Number
}
```

## /tickets
|Metoda| Endpoint | Description |
|-----------|---------|----------------|
| GET| / | Get tickets of the logged user|
| POST| /add | Add ticket for the logged user|

## ticket JSON
```
{
    ticksetScreeningID: {
        screeningMovie: {
            movieName: String,
            movieDirector: String,
            movieLength: Number,
            movieDescription: String,
            movieReleaseYear: Number,
            moviePosterURL: String
        },
        screeningRoom: Number,
        screeningDate: Date,
    },
    ticketType: String,
    ticketSeats: [Number],
    ticketUser: {
        userEmail: String,
        userName: String,
        userPassword: String,
        userType: String,
    }
    
}
```


## /comments
| Metoda| Endpoint | Description |
|---------|---------|----------------|
| GET |/user | Get comments of the logged user|
| GET | /movie/:movie | Get comments of the movie (/:movie is movieID)|
| POST | /add | Add a comment to the movie by the currently logged user|

## comment JSON

```
{
    commentUser: {
        userEmail: String,
        userName: String,
        userPassword: String,
        userType: String,
    },
    commentMovie: {
        movieName: String,
        movieDirector: String,
        movieLength: Number,
        movieDescription: String,
        movieReleaseYear: Number,
        moviePosterURL: String
    },
    commentBody: String
}
```
