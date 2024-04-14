//import mongoose
const mongoose = require("mongoose");
// create data schema
const dataSchema ={
    username: {type: String, require: true},
    password: {type: String, require: true},
    }

//create mongooseSchema
const mongooseSchema = mongoose.Schema(dataSchema);
//create and export mongoose model
module.exports = mongoose.model("Book", mongooseSchema)