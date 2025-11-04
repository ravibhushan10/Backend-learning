const express = require("express");
const app = express();
const main = require("./database");
const User = require("./Models/users")
const validUser = require("./utils/validateuser")
const bcrypt = require("bcrypt");
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken');


app.use(express.json());
app.use(cookieParser());  //parse the cookies to js object


app.post("/register", async (req,res)=>{

    try{

        // Validate kya uske andar firstName
        validUser(req.body);
        
        //  converting password into hashing
       req.body.password = await bcrypt.hash(req.body.password,10);

        await User.create(req.body);
        res.send("User Registered Successfully");
    }
    catch(err){
        res.send("Error "+ err.message);
    }
})


        //REST API
app.post("/login", async(req,res)=>{

    try{
         
        // validate karna
        // here don't need to send the _id form the frontend we search in db with emailid
        const people = await User.findOne({emailId:req.body.emailId});
        
        // if(!(req.body.emailId===people.emailId))
        //     throw new Error("Invalid credentials");

        const IsAllowed = await bcrypt.compare(req.body.password, people.password);

        if(!IsAllowed)
            throw new Error("Invalid credentials");
        

        // jwt token :here you have to attach the payload and JWT key and header part automatically attach
                                   //payload                             server(jwt)  key      expire time of jwt(60:60second, "120":120 milisecond, "2 days":2 days) 
        // const token = jwt.sign({_id:people._id, emailId:people.emailId},"Rohit@13412$" , {expiresIn:"2 days"});
        const token = jwt.sign({_id:people._id, emailId:people.emailId},process.env.SECRET_KEY);
                   //key: value
        res.cookie("token",token);
        res.send("Login Successfully");

    }
    catch(err){
        res.send("Error: "+err.message);
    }
})

app.get("/info", async(req,res)=>{

    try{

      
        //    verify cookie(token)
        // it return payload when it valid user otherwise it return the error
        const payload =  jwt.verify(req.cookies.token,process.env.SECRET_KEY);
        console.log(payload);
        const result = await User.find();
        // console.log(req.cookies); print the token(cookies)
       


       res.send(result);
    }
    catch(err){
        res.send("Error"+err.message);
    }
})

app.get("/user", async(req,res)=>{
    
    try{

        // code likhna padege, user ko authenticate kar paauon
        const payload =  jwt.verify(req.cookies.token,process.env.SECRET_KEY);
        // console.log(payload);
        const result = await User.findById(payload._id);
        res.send(result);

    }
    catch(err){
       
        res.send("Error"+err.message);
    }


})

app.delete("/user/:id", async (req,res)=>{

    try{
        await User.findByIdAndDelete(req.params.id);
        res.send("Deleted Succesfully");
    }
    catch(err){
        
        res.send("Error"+err.message);
    }


})

// {
//     "_id":"67ec0a8bffe09233dc9c93fc",
//     "age": 12,
//     "emailId": "mohan@gmail.com"
// }

app.patch("/user", async(req,res)=>{

    try{
        const {_id, ...update} = req.body;

        await User.findByIdAndUpdate(_id,update,{"runValidators":true});
        res.send("Update Succesfully");
    }
    catch(err){
        res.send("Error "+err.message);
    }
})



main()
.then(async ()=>{
    console.log("Connected to DB")
    app.listen(process.env.PORT, ()=>{
        console.log("Listening at port 3000");
    })
})
.catch((err)=>console.log(err));



