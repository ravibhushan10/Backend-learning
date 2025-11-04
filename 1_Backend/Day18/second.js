const bcrypt=require("bcrypt")

const password="ravi@123";



async function hashing(){
   
    console.time("ravi");
    // here no need to manually store salt it manage everything during createion to verification
    const ans= await bcrypt.hash(password,10);   //if you give 31 iteration it takes 3 days almost
    console.timeEnd("ravi");
    
    console.log(ans);
}
// hashing();


// High round takes more time and cpu resource during verification

// normal round 10-12 for website 
// security 12-14 round


async function has(){
    const salt= await bcrypt.genSalt(10);
    console.log(salt);
    const ans=await bcrypt.hash(password,salt);
    console.log(ans);

    const isMatch = await bcrypt.compare("ravi@123", ans);
    console.log(isMatch);
}
has();