const { client } = require("./dbConfig.js");

const updateOneData = async () => {
  try {
    const database = client.db("school");
    const users = database.collection("teachers");
    const filter = { name: "Abir" };
    const options = { upsert: true };

    const updateDoc = {
      $set: { name: "Sabbir" },
    };

    const result = await users.updateOne(filter, updateDoc, options);
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

updateOneData();
