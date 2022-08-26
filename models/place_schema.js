const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    state: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    slug: {
        type: String
    }
})

module.exports = mongoose.model("Place", placeSchema)