# Endpoints

## /movies
Metoda | Endpoint | Description |
| -------- |--------  | -------------|
| GET | /        | Get all movies |
| POST | /add     | Add a movie     | 

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
| POST | /register | Register user|
| POST | /login | Login user |
| GET|/me | Get information about currently logged user|

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
| GET| /:movie | Get screenings for a movie (/:movie is movieID)
| POST| /add | Add a screening
| DELETE | /delete | Delete a screening, by screening ID
| GET | /today | Get today screenings
| GET | /today/:movie | Get today screenings for a movie (/:movie is movieID)


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
    ticketPrice: Number,
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
