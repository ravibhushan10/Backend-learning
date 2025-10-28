const express = require("express");
const app = express();

// Route Handler=nesting of callback function is called route handler

// app.use(route, RH, [RH, RH, RH], RH, RH)
// Middleware: mw-> mw-> mw-> RequestHandler

// app.use("/user", (req,res,next)=>{
    
//     console.log("first");
//     // res.send("Hello Ji");
//     next();
// })

// app.use("/user", (req,res,next)=>{
    
//     console.log("Second");
//     // res.send("I am second");
//     next();
// })

// app.use("/user",(req,res,next)=>{
//     console.log("Third")
//     res.send("I am Third");
//     // next();
// })

// app.use("/user",(req,res,next)=>{
//     console.log("fourth")
//     res.send("I am Fourth");  
// }
// )

// write your all route handler either individual or seprate by comma in nested form

// Maintain logs through middleware:  because as a developer i have to know kis request ke karan server down huua to uspe kam chalega , government bhi data mang sakti hai,finance use


// This is middleware , any data goes through this middleware , here we note all important things and maintain the log (like ip,time, url,)  and send further next 
app.use("/user",(req,res,next)=>{
    
    // console.log(`${Date.now()} ${req.method} ${req.url}`);
    // // Authorization wagera kar sakta hu
    // next();
    // 30 line of code
    next();
})



app.get("/user", (req,res)=>{

    res.send("Info about user")
})

app.post("/user", (req,res)=>{

    res.send("Info saved");
})


app.delete("/user", (req,res)=>{
    
    res.send("Info Deleted");
})




app.listen(3000, ()=>{
    console.log("Listening at port 3000");
})


// Request: Log ko maintain karta
// Timing: Kis type ki request thi, URL