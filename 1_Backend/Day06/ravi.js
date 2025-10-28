const ravi=require('express');
const app = ravi();

/*

// to send the response from the server 
app.use( (req, res) => {
    //   res.send("Server running");
    // or send the data in json formate
    res.send({"name":"ravi","age":"40","money":"400"});
    });
    */
   
   
   // Handle routing
   
   app.use( "/about",(req, res) => {
       
       res.send("I'm your about page");
    })
    
    app.use( "/contact",(req, res) => {
        
        res.send("I'm your contact page");
    })

    app.use( "/",(req, res) => {
    res.send({"name":"ravi","age":"40000","money":"500000"});
    })
   
app.listen(4000, () => console.log("Listening on port 4000"));

