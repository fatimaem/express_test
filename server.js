const express=require("express");
const dotenv=require("dotenv");
const router = require("./routers/index");
const {connectDatabase} = require("./helper/database/connectDatabase");    
dotenv.config({
    path:"./config/env/config.env"
})
connectDatabase();
const app = express();
const PORT = process.env.PORT;

//Routers middleware
app.use("/api",router);

app.listen(PORT,()=>{
    console.log(`app started on ${PORT}`);
});

