const express=require("express")
const app=express();
const main =require("./api_database")
const User=require("./Models/users")

app.use(express.json());

app.get("/info",async(req,res)=>{
    const ans=  await User.find({});
    res.send(ans);
})

app.post("/info",async(req,res)=>{
//     const ans=new User(req.body);
//    await  ans.save();

// second method
try{
    await User.create(req.body)
      res.status(200).send("successfully updated");
    }
    catch(err){
        res.status(500).send(err);
    }

})


app.delete("/info",async(req,res)=>{
   await User.deleteOne({name:"ravi"});
    res.send("Deleted");
})

app.put("/info",async(req,res)=>{       //lokesh wale name ko dudho database me    //kon sa update karna hai
    const result = await User.updateOne({ name: 'lokesh' }, { age: 100 });
    res.send("udpdated");
})
// we need to firstly connect the database then start the listining
main()
  .then(() => {console.log("Connected to database")
   app.listen(process.env.PORT,async()=>{
    console.log("Listining at port 3000");

    const ans2=await User.find({name:"ravi"});
    console.log(ans2);
})  
  
})
.catch((err) => console.log(err))
