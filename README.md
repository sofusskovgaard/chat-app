# chat-app


## Setup

When setting up the mongodb database you should first create a user.

```
use products
```

```
db.createUser({user: "dev",pwd: "dev",roles:["readWrite","dbAdmin"]})
```