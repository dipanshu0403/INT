
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./src/routes/auth.routes");



const app = express();

app.use(cors());
app.use(express.json());


 try{
    mongoose.connect("mongodb://localhost:27017/myDB");
 }catch(error){
    console.log(error);
 }

const port = 5000;

app.use("/api/auth",router);

app.listen(port, () => {
    console.log("Server started");
})

