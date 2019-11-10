## Boards

##### Free 

GET  ```/V1/game```
     
##### Authenticated

HEADER ``` Authorization Bearer <USER_TOKEN> ```

Create new Board
     
POST  ```/V1/game ```

```
{
  "name": "ludopaty",
  "image": "http://www.url-of-image",
  "boxes": [{"type":"normal","position": 1, "color": "#65d9e6", "text": "Lorem ipsum"},{"type":"normal","position": 2, "color": "#f1dc38", "text": "Dolor sit amet"}]
}
```

Modify Board

PUT ``` /V1/game/{game_id}```
     
```
{
  "field-to-update": "value"
}
```   

##### Just creator //TODO: 

DELETE ```/V1/game/{game_id} ```
     
 
