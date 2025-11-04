const express = require("express");

const commentRouter = express.Router();
const userAuth = require("../middleware/userAuth");

commentRouter.get("/:id",userAuth,(req,res)=>{
    res.send("Comment send");
})

commentRouter.patch("/",userAuth,(req,res)=>{
    res.send("Comment updated");
})

commentRouter.delete("/",userAuth,(req,res)=>{
    res.send("Comment deleted");
})

module.exports = commentRouter;