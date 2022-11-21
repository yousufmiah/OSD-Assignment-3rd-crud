const { client } = require("./dbConfig.js");

const findOneData = async () => {
  try {
    const database = client.db("school");
    const users = database.collection("teachers");
    const query = { name: "Salam" };

    const result = await users.findOne(query);
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

findOneData();
