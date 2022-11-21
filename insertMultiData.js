const { client } = require("./dbConfig.js");

const insertMultiData = async () => {
  try {
    const database = client.db("school");
    const users = database.collection("teachers");

    const doc = [
      {
        name: "Abir",
        age: 30,
        address: "Sylhet",
      },
      {
        name: "Babul",
        age: 32,
        address: "Kustia",
      },
      {
        name: "Salman",
        age: 25,
        address: "Pabna",
      },
      {
        name: "Sabbir",
        age: 40,
        address: "Cox's Bazar",
      },
    ];
    const result = await users.insertMany(doc);
    console.log(`${result.insertedCount} documents were inserted`);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

insertMultiData();
