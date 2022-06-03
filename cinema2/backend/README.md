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
    userBoughtTickets: Number[]
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
    screeningMovieName: String,
    screeningRoom: Number,
    screeningDate: Date,
}
```