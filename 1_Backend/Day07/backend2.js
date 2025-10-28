const ravi=require('express');
const app=ravi();

// To get the data from the backend you need to parsing ,this is also a middleware
app.use(ravi.json());

app.get("/user",(req,res)=>{
    //  console.log(req);  //when you send the any response from the frontend then server recive very big data.
     res.send({"name":"ravu"});
});

app.post("/user",(req,res)=>{

  console.log(typeof (req.body.age));
  res.send("Your request has been accepted");
})




app.listen(4000, ()=>{
    console.log("Listening at port number:4000");
})

