# Game session

### Rest api

TODO: fix create/invite conflict on email

Create new session

POST  ```/V1/create ```

```
{
  "gameId": {GAME_ID},
  "users": ["irene.iaccio@gmail.com", "irene.iaccio+2@gmail.com"]
}
```

Invite other users by mail

PUT  ```/V1/invite:{game_id} ```

```
{
  "email": "irene.iaccio@gmail.com",
  "email": "irene.iaccio+1@gmail.com"
}
```

Joi session

PUT  ```/V1/join:{game_id} ```

Update session

PUT ``` /V1/update```
     
```
{
  "field-to-update": "value"
}
```   

### Web Socket 

Each time a session is updated a server event is emitted to all the sokets connected:

 ``` io.to((<any>Session)['token']).emit('session-update', Session) ```
 

Join session from the client:

 ```
socket.on('connect', function() {
    socket.emit('join', { token: 'TOKEN_FROM_SESSION' });
});  
``` 

Event listener for session changes:

 ```
socket.on('session-update', function (data) { 
   // Update frontend..
});
```
