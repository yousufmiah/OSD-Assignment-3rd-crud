const { client } = require("./dbConfig.js");

const insertOneData = async () => {
  try {
    const database = client.db("school");
    const users = database.collection("teachers");

    const doc = {
      name: "Abir",
      age: 30,
      address: "Sylhet",
    };
    const result = await users.insertOne(doc);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

insertOneData();
