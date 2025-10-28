const ravi=require('express');
const app = ravi();

// here id is a params , you can use anything instead of params it will take to about page
// localhost:4000/about/87
// localhost:4000/about/user
// localhost:4000/about/ravi
// localhost:4000/about/98453kj

// params catch the routing dynamically: to show the data according to user like, instgram.com/ravi_9,instgram.com/rohit_9,
// it will take the id part from the URL and fetch the respective user from the database and show the data.

          //  key    : value
   app.use( "/abou+t/:id",(req, res) => {
        console.log(req.params);
       res.send("I'm your about page");
    })
    
    app.use( "/contact",(req, res) => {
        
        res.send("I'm your contact page");
    })

    app.use( "/",(req, res) => {
    res.send({"name":"ravi","age":"40000","money":"500000"});
    })
   
app.listen(4000, () => console.log("Listening on port 4000"));
