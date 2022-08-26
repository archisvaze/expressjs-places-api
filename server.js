const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const places_collection = require("./models/place_schema")
require("dotenv").config();


//connet to mongodb
const mongoose = require('mongoose');

const url = process.env.URL;
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(url, connectionParams)
    .then(() => {
        console.log('Connected to database ')
    })
    .catch((err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })


app.listen(8000, () => {
    console.log(`Listening on PORT 8000`)
})

//ROUTES

//create new place
app.post('/create', async (req, res) => {
    const { name, city, state } = req.body;
    console.log("starting to create a new place...");
    const slug = (name.split(" ").join("-") + "-" + city).toLowerCase();

    const newPlace = new places_collection({
        name,
        city,
        state,
        slug
    })
    try {
        const savedPlace = await newPlace.save();
        res.status(200).json(savedPlace);
        console.log("New place created with id: " + savedPlace._id);
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: err })
    }
})

//find places by city
app.get('/find/:city', async (req, res) => {
    try {
        const places = await places_collection.find({ city: req.params.city });
        res.status(200).json(places)
    } catch (err) {
        console.log(err)
        res.status(400).json({ error: err })
    }

})
//find places by name
app.get('/find/:name', async (req, res) => {
    try {
        const places = await places_collection.find({ name: req.params.name });
        res.status(200).json(places)
    } catch (err) {
        console.log(err)
        res.status(400).json({ error: err })
    }
})


//Get place by SLUG

app.get("/slug/:keyword", async (req, res) => {
    let keyword = (req.params.keyword).toLowerCase();
    let filtered_places = [];
    try {
        const places = await places_collection.find({});
        for (let place of places) {
            let place_slug_arr = place.slug.split("-");
            if (place_slug_arr.includes(keyword)) filtered_places.push(places)
        }
        res.status(200).json(filtered_places);
    } catch (err) {
        console.log(err)
        res.status(400).json({ error: err })
    }
})


//get all
app.get('/', async (req, res) => {
    try {
        const places = await places_collection.find({});
        res.status(200).json(places)
    } catch (err) {
        console.log(err)
        res.status(400).json({ error: err })
    }
})


