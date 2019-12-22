# Dice

This service is meant to be used also outside the games built with this API. This is why it is free of authentication

POST  ```/V1/throw-dice ```

Dices for each turn, can take properties from a payload (TODO: or from the session)

```
{
 "0": Number of faces
 "1": Number of faces
 "2": Number of faces
 ..
}
```

