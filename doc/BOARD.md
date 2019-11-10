## Boards

##### Free 

GET  ```/V1/board```
     
##### Authenticated

HEADER ``` Authorization Bearer <USER_TOKEN> ```

Create new Board
     
POST  ```/V1/board ```

```
{
  "name": "ludopaty",
  "image": "http://www.url-of-image",
  "boxes": [{"type":"normal","position": 1, "color": "#65d9e6", "text": "Lorem ipsum"},{"type":"normal","position": 2, "color": "#f1dc38", "text": "Dolor sit amet"}]
}
```

Modify Board

PUT ``` /V1/board/{board_id}```
     
```
{
  "field-to-update": "value"
}
```   

##### Admin 

DELETE ```/V1/board/{board_id} ```
     
 
