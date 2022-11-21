const { client } = require("./dbConfig.js");

const findMultiData = async () => {
  try {
    const database = client.db("school");
    const users = database.collection("teachers");
    const query = {};

    const cursor = users.find(query);

    if ((await cursor.EstimatedDocumentCount) === 0) {
      console.log("No documents found!");
    } else {
      const users = await cursor.toArray();
      await users.forEach((user) => console.log(user));
    }
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

findMultiData();
