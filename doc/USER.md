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


GET ```/V1/me ```
