const mongoose = require('mongoose');
const { Schema } = mongoose;

async function main(){
  // this is a cluster but when you add /database name it create the new database on the fly
  await mongoose.connect(process.env.DB_CONNECT_KEY)
  
  // coding start
  // Schema define= it is not neccessary to present all field user send only two also accepteable but not greater than 4(exact same key)
  const userSchema=new Schema({
    name:String,
    age:Number,
    city:String,
    gender:String
  })

  // create model: means collection create(table)
  // Here it is also called class , so User is a class and we can create an object of this class
 const User= mongoose.model("user",userSchema);

 /*
// two step process
//  create object /document
const user1 =new User({name:"ravi",age:30,city:"muzaffarpur",gender:"male"});

// store in database
await user1.save();


// single step create object/document
await User.create({name:"ravi",age:30,city:"muzaffarpur",gender:"male"})


// multiple document create
await User.insertMany([{name:"lokesh",age:40},{name:"abhishek",gender:"male"}])
*/

// searching in database
const ans=await User.find({});
// console.log(ans);

// find document by particular field
const ans2=await User.find({name:"ravi"});
console.log(ans2);
}

main()
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err))
  