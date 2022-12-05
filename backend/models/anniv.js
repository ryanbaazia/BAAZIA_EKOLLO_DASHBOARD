const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const annivSchema = new mongoose.Schema({
    _id: ObjectId,
    nom: {type: String, required: true},
    date: String

}, {
    timestamps: true
}
);

const Annivs = mongoose.model("Annivs", annivSchema);

module.exports =  Annivs;