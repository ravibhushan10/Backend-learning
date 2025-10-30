const express = require("express");
const app = express();
const {Auth} = require("./middleware/auth")

// CRUD: Create Read update Delete

// Database: array

// you have to convert the string data into the js object
app.use(express.json());

const FoodMenu = [
    {id:1, food:"Chowmein", category:"veg", price:500},
    {id:2, food:"Butter Naan", category:"veg", price:100},
    {id:3, food:"Chicken", category:"non-veg", price:1000},
    {id:4, food:"Mutton", category:"non-veg", price:1500},
    {id:5, food:"Momo", category:"veg", price:300},
    {id:6, food:"Chai", category:"veg", price:50},
    {id:7, food:"Rajma", category:"veg", price:300},
    {id:8, food:"Roti", category:"veg", price:20},
    {id:9, food:"Lolipop", category:"non-veg", price:700},
    {id:10, food:"Kebab", category:"non-veg", price:400},
    {id:11, food:"paneer", category:"veg", price:800},
    {id:12, food:"Egg Curry", category:"non-veg", price:300},
    {id:13, food:"salad", category:"veg", price:100},
    {id:14, food:"shourma", category:"veg", price:300},
    {id:15, food:"Butter Chicken", category:"non-veg", price:900},
    {id:16, food:"Mushroom", category:"veg", price:700},
]

const AddToCart = [];
// user ka jo bhi food add to cart hga, wo idhr jaayega


app.get("/food", (req,res)=>{
    res.status(200).send(FoodMenu);
})




// Authenticate admin here  This is the middleware for checking first method
// app.use("/admin",Auth)


// this is also second method to use middleware auth,
app.post("/admin", Auth, (req,res)=>{

    
    FoodMenu.push(req.body);
    res.status(201).send("Item Added Succesfully");
    // express server automatically send the status sometimes , but good practice send the status manually

})

app.delete("/admin/:id", Auth, (req,res)=>{
    
    // when request comes from the API/url
    const id = parseInt(req.params.id);

    const index = FoodMenu.findIndex(item => item.id ===id);

        if(index===-1){
           res.send("Item Doesn't Exist");
        }
        else{
            FoodMenu.splice(index,1);    //To delete the specific item from the array
            res.send("Succesfully Deleted");
        }
    
    
})

app.patch("/admin", Auth, (req,res)=>{
   
  // when data comes in the from the body 
    const id = req.body.id;

    const fooddata = FoodMenu.find(item=> item.id===id);

        if(fooddata){
            
            if(req.body.food)
                fooddata.food = req.body.food;
            if(req.body.category)
                fooddata.category = req.body.category;
            if(req.body.price)
                fooddata.price = req.body.price;

            res.send("Successfully Updated");
        }
        else{
            res.send("Item not exist")
        }


})

// localhost:3000/admin



app.listen(3000, ()=>{
    console.log("Listening at port 3000");
})

