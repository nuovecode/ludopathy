## User

##### Free 

Create User

POST  ```/V1/register ```

```
{
   "firstName" : "Iaccio",
   "lastName" : "Iaccio",
   "password" : "MySuperSecretPassword",
   "email": "irene.iaccio@gmail.com",
   "games": []
}
```

POST  ```/V1/login ```

```
{
   "email" : "irene.iaccio@gmail.com",
   "password" : "MySuperSecretPassword"
}
```

##### Authenticated

HEADER ``` Authorization Bearer <USER_TOKEN> ```


