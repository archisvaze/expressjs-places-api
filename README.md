# Places API

This is a simple API to manage places. The API allows you to: 
- Create a place
- Get a specific place
- List places and filter them by name or city


## End Points

### GET: get all places
https://manage-places-api.herokuapp.com/

### POST: Create a new place
https://manage-places-api.herokuapp.com/create
```
'Accept: application/json'
{
    name: "",
    city: "",
    state: ""
}
```
Respnse is the newly created place

### GET: Get a list of places by name or city
https://manage-places-api.herokuapp.com/find/city
or
https://manage-places-api.herokuapp.com/find/name

### Example Response 
GET: [https://manage-places-api.herokuapp.com/find/New York](https://manage-places-api.herokuapp.com/find/New%20York)
```
[
{
"_id": "630854a37eb68a46678ed4e0",
"name": "Statue Of Liberty",
"city": "New York",
"state": "New York",
"slug": "statue-of-liberty-new york",
"createdAt": "2022-08-26T05:05:39.663Z",
"updatedAt": "2022-08-26T05:05:39.663Z",
"__v": 0
},
{
"_id": "630856e57723513701351f45",
"name": "New York University",
"city": "New York",
"state": "New York",
"slug": "new-york-university-new york",
"createdAt": "2022-08-26T05:15:17.559Z",
"updatedAt": "2022-08-26T05:15:17.559Z",
"__v": 0
},
{
"_id": "630857077723513701351f47",
"name": "Central Park",
"city": "New York",
"state": "New York",
"slug": "central-park-new york",
"createdAt": "2022-08-26T05:15:51.607Z",
"updatedAt": "2022-08-26T05:15:51.607Z",
"__v": 0
}
]
```

### GET: Find place by keyword
https://manage-places-api.herokuapp.com/slug/keyword

