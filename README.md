# Ludopathy

Starting dev app:

```bash
docker-compose up
```

Api route:

```
http://localhost:8080/
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


# Entities


- Boards with boxes
- Boxes Types
- Users with boards / piece / positions
- Pieces Types

- Cards

# Documentation

[Mongo data modeling](https://docs.mongodb.com/manual/core/data-modeling-introduction/)

[Mongoose Doc](https://mongoosejs.com/docs/queries.html)

