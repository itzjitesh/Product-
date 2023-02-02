const mongoose = require("mongoose");

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost/productDB")
    .then(()=>{console.log("connected to db");})
    .catch(()=>{ console.log("Not connected to db");});

const productSchema = new mongoose.Schema({
    productId : {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;