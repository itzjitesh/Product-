const express = require("express");
const Product = require("./schema");

const app = express();
const port = 5000;

// [{productId:123,quantity:10,operation:”add”},
// {productId:143,quantity:14,operation:”add”},    
// {productId:193,quantity:17,operation:”subtract”}]

const prod1 = new Product({
    productId: 123,
    quantity: 10,
    operation: "add"
});

prod1.save();


const prod2 = new Product({
    productId: 143,
    quantity: 14,
    operation: "add"
});

prod2.save();


const prod3 = new Product({
    productId: 193,
    quantity: 17,
    operation: "substract"
});

prod3.save();

app.get("/api/product", async(req, res)=>{

    async function saveDoc(){
        const products = await Product.find({});

        products.forEach((item) => {
            if(item.operation == "add") {
            item.quantity = item.quantity +1;
            item.save();
            } 
            else if ( item.operation == "substract") {
            item.quantity = item.quantity -1;
            item.save();
            }
        });
    }

    saveDoc();

        // const product1 = await Product.findOneAndUpdate({productId: 123}, {$set: {quantity: 11}});
        // const product2 = await Product.findOneAndUpdate({productId: 143}, {$set: {quantity: 15}});
        // const product3 = await Product.findOneAndUpdate({productId: 193}, {$set: {quantity: 16}});

    res.json({
        message: "Successful",
        json: 201,
    });
});

app.listen(port, ()=>{
    console.log(`The server is running at ${port}`);
});