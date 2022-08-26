# Places API

This is a simple API to manage places. The API allows you to: 
- Create a place
- Get a specific place
- List places and filter them by name or city


## End Points

### GET all places
https://manage-places-api.herokuapp.com/

### Respnse
```
[
{
    "_id": "63084a99cdee9d66065a2af4",
    "name": "Cricket Club",
    "city": "Pune",
    "state": "Maharashtra",
    "slug": "cricket-club-pune",
    "createdAt": "2022-08-26T04:22:49.920Z",
    "updatedAt": "2022-08-26T04:22:49.920Z",
    "__v": 0
},
{
    "name": "Gate Way Of India",
    "city": "Mumbai",
    "state": "Maharashtra",
    "slug": "gate-way-of-india-mumbai",
    "_id": "6308526997c57367f33c2b7a",
    "createdAt": "2022-08-26T04:56:09.851Z",
    "updatedAt": "2022-08-26T04:56:09.851Z",
    "__v": 0
}
]
```

### Create new place
https://manage-places-api.herokuapp.com/create
```
'Accept: application/json'
{
    name: "",
    city: "",
    state: ""
}
### Respnse is the newly created place
```

### Find place by keyword
https://manage-places-api.herokuapp.com/slug/<keyword>

