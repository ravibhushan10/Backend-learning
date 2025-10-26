const http = require('http');

// req=jo client data mangta hai
// res= jo server server karega 
const server = http.createServer((req,res)=>{
    
    // res.end("Hello Coder Army");


    // routing : "/", "/contact", "/about"
    if(req.url==="/"){
        res.end("Hello Coder Army how are you bro");   //send homepage(html,css,js file)
    }
    else if(req.url==="/contact"){
        res.end("This is our Contact Page")   //send contact(html,css,js file)
    }
    else if(req.url==="/about"){
        res.end("This is our About Page")    //send about (html,css,js file)
    }
    else
    {
        res.end("Error: Page Not Found");
    }
});


server.listen(5000, ()=>{
    console.log("I am Listening at port number 4000");
})