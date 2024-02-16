# Week 8 - Sequelize

## Models

- Books
  - id
  - title
  - GenreId
  - AuthorId

- Authors
  - id
  - name

- Genres
  - id
  - name
---
---
## Routes

In each example url, replace "xxx" with "books", "authors" or "genres"

### POST

#### `POST localhost:0000/xxx`
Creates new items on the database. Must be entered as a list of objects.

eg `POST localhost:0000/books` with the following request body
``` json
[
    {
        "title": "The Colour of Magic",
        "AuthorId": 1,
        "GenreId": 1
    },
    {
        "title": "Earth Welcomes Careful Drivers",
        "AuthorId": 2,
        "GenreId": 2
    }
]
```
---
### GET

#### `GET localhost:0000/xxx`
Lists all items of the given type.

eg `GET localhost:0000/authors`

#### `GET localhost:0000/xxx/key/value`
Lists any items with a property matching the key value pair.

eg `GET localhost:0000/genres/fantasy`

---
### PUT
#### `PUT localhost:0000/xxx`
Updates all items matching the criteria given in the request body.

eg `PUT localhost:0000/books` with the following request body

``` json
{
    "where": { "title": "The Lord of the Rings" },
    "update": { "GenreId": 1 }
}
```
--- 
### DELETE
#### `DELETE localhost:0000/xxx`
Deletes items matching the criteria given in the request body.

eg `DELETE localhost:0000/books` with the following request body

``` json
{ "where": { "AuthorId": 4 } }
```

This will delete any books written by the author with an ID of 4.

#### `DELETE localhost:0000/xxx/deleteAll`
Deletes all items of the type given.

eg `DELETE localhost:0000/genres/deleteAll` will delete all genres stored on the database.
