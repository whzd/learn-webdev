const { MongoClient, ServerApiVersion } = require("mongodb");
// Replace the placeholder with your Atlas connection string
const uri = "mongodb://localhost:27017";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri,  {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
);
async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("shopDB").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    const myDB = client.db("shopDB");
    const myColl = myDB.collection("fruits");
    try {
      const docs = [
        {
          name: "Apple",
          score: 8,
          review: "Great fruit"
        },
        {
          name: "Orange",
          score: 6,
          review: "Kinda sour"
        },
        {
          name: "Banana",
          score: 9,
          review: "Great stuff!"
        }
      ];
      const insertManyresult = await myColl.insertMany(docs);
      const ids = insertManyresult.insertedIds;
      console.log(`${insertManyresult.insertedCount} documents were inserted.`);
      for (const id of Object.values(ids)) {
          console.log(`Inserted a document with id ${id}`);
      }
      const findResult = await myColl.find()
      for await (const fruit of findResult){
        console.log(fruit)
      }
    } catch(e) {
      console.log("A MongoBulkWriteException occurred, but there are successfully processed documents.");
      const ids = e.result.result.insertedIds;
      for (const id of Object.values(ids)) {
          console.log(`Processed a document with id ${id._id}`);
      }
      console.log(`Number of documents inserted: ${e.result.result.nInserted}`);
    }
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

