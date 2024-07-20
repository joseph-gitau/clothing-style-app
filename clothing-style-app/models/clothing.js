const mongoose = require('mongoose');

const clothingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    imageUrl: { type: String }
});

const Clothing = mongoose.model('Clothing', clothingSchema);
module.exports = Clothing;
