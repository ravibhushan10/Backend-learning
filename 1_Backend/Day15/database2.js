const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = process.env.DB_CONNECT_KEY

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function main() {
  try {
    // Connect with verification
    await client.connect();
    
    // Verify connection actually works
    await client.db("coderarmy").command({ ping: 1 });
    console.log("Successfully connected to MongoDB!");
    
    // Now do your actual operations
    const db = client.db("coderarmy");
    const collection = db.collection("user");
    
    // Your CRUD operations here

    // const insertResult = await collection.insertOne({
    //   name: "Test User",
    //   age: 25,
    //   timestamp: new Date()
    // });
    // console.log("Inserted document:", insertResult.insertedId);

const doc = { name: "Neapolitan pizza", shape: "round" };
const result = await collection.insertOne(doc);






    // at this time it check database,collection is exist or not , when not exist it automatically create new one

    // here every document comes one by one from the database with the help of cursor
    const findresult= collection.find({});
    for await(const obj of findresult)
        console.log(obj);
       
    
    

  } catch (error) {
    console.error("MongoDB operation failed:", error);
    throw error;
  } finally {
    // Always close connection
    await client.close();
    console.log("MongoDB connection closed");
  }
}

// Handle top-level errors
main().catch(console.dir);