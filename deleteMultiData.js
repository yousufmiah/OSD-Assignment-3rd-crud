const { client } = require("./dbConfig.js");

const deleteMultiData = async () => {
  try {
    const database = client.db("school");
    const users = database.collection("teachers");
    const query = {};

    const result = await users.deleteMany(query);
    console.log("Deleted " + result.deletedCount + " documents");
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

deleteMultiData();
