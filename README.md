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
  "googleApi": {
    "clientId": {CLIENT_ID},
    "clientSecret": {CLIENT_SECRET},
    "redirect": {APP_URL}
  }
}
```

## Rest Api

### Boards

GET 
     ```
/V1/board
     ```
     
POST 
     ```
/V1/board
     ```

```
{
  "name": "ludopaty",
  "image": "http://www.url-of-image",
  "boxes": [{"type":"normal","position": 1, "color": "#65d9e6", "text": "Lorem ipsum"},{"type":"normal","position": 2, "color": "#f1dc38", "text": "Dolor sit amet"}]
}
```

DELETE 
     ```
/V1/board/{board_id}
     ```
     
PUT 
     ```
/V1/board/{board_id}
     ```
     

```
{
  "field-to-update": "value"
}
```     


# Parts of the game

### Entities

- User with boards / position per board / round
- Boards (properties: Boxes)
- Credits (incremental)
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


# Documentation

[Mongo data modeling](https://docs.mongodb.com/manual/core/data-modeling-introduction/)

[Mongoose Doc](https://mongoosejs.com/docs/queries.html)

[Google api](https://medium.com/@jackrobertscott/how-to-use-google-auth-api-with-node-js-888304f7e3a0)

[Login](https://www.toptal.com/nodejs/secure-rest-api-in-nodejs)



