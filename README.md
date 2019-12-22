# Ludopathy

## Dev 

Starting docker app:

```bash
docker-compose up
```
## Auth

in src/ create a file with auth configs

```
{
  "objHashSecret": "__SECRET_CHANGE_ME__",
  "googleApi": {
    "clientId": {CLIENT_ID},
    "clientSecret": {CLIENT_SECRET},
    "redirect": {APP_URL}
  }
}
```

## Rest Api
List of available API 

- [User](doc/USER.md)

- [Game](doc/GAME.md)

- [Game Session](doc/SESSION.md)

- [Dice](doc/DICE.md)
 

# Parts of the game

### Entities

- User with boards / position per board / round
- Boards (properties: Boxes)
- Credits (incremental)
- Life (decremental)
- Cards


### Properties

- context (user/board)
- Position 


### Actions

- Move
- Talk
- discard (card)

### Other

- BoxesTypes
- CardTypes
- Game rules

# Sections

- Profile
- Create Board 
- Join Game (and invite other user by email)


# Documentation

[Mongo data modeling](https://docs.mongodb.com/manual/core/data-modeling-introduction/)

[Mongoose Doc](https://mongoosejs.com/docs/queries.html)





