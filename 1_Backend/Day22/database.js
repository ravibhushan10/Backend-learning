const mongoose = require('mongoose');

async function main() {
                    //  use by environment variable
  await mongoose.connect(process.env.DB_CONNECT_KEY);
  
}


module.exports = main;