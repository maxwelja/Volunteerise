const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema ({
    title: String,
    organization: String,
    location: String,
    date: String
}, { timestamps: true });

const testSchema = new Schema ({
    name: String,
    email: String,
}, { timestamps: true});

const event = mongoose.model('Event', eventSchema);
const test = mongoose.model('User', testSchema);

module.exports = { event, test };