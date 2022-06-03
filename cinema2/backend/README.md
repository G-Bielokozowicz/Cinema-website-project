# Endpoints

## /movies
| Endpoint | Description |
|--------  | -------------|
| /        | Get all movies |
| /add     | Add a movie     | 

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
| Endpoint | Description |
|---------| -----------|
| /add | Register user|
| /login | Login user |
| /me | Get information about currently logged user|

## user JSON
```
{
    userEmail: String,
    userPassword: String,
    userType: String,
}
```

## /screenings
| Endpoint | Description |
|---------| -----------|
| / | Get all screenings
| /add | Add a screening

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
| Endpoint | Description |
|---------|----------------|
| / | Get tickets of the logged user|
| /add | Add ticket for the logged user|

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
        userPassword: String,
        userType: String,
    }
    
}
```