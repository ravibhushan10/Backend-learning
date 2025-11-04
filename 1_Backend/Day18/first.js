const bcrypt=require("bcrypt")

const password="ravi@123";

// hascode+salt

async function hashing(){
    // it is a slow processn you have to wait so use await
               //password , iteration(means how much you want to complex 2^10 times runs)
    const ans= await bcrypt.hash(password,10);   //gives you hascode($2b$10$nHG/JtX6hIIL4HlU9A9rGeEd6Z6X5Ok92WWdrHGElzXpffkYCUrCa)
    // but you need to store the salt for verify
    console.log(ans);
}
hashing();

//every time this function gives you new hascode

