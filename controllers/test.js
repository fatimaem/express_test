const express = require("express");

const test_func = (req,res,next)=>{
        console.log("test_func controller ")
        return res.status(200).json({
            status:"success"
        })
}
module.exports = {test_func}