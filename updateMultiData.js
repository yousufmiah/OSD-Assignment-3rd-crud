const { client } = require("./dbConfig.js");

const updateMultiData = async () => {
  try {
    const database = client.db("school");
    const users = database.collection("teachers");

    const filter = {};

    const updateDoc = {
      $set: { isEmployee: true },
    };

    const result = await users.updateMany(filter, updateDoc);
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

updateMultiData();
