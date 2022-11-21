const { client } = require("./dbConfig.js");

const deleteOneData = async () => {
  try {
    const database = client.db("school");
    const users = database.collection("teachers");
    const query = { name: "Sabbir" };

    const result = await users.deleteOne(query);
    if (result.deletedCount === 1) {
      console.log("Successfully deleted one document.");
    } else {
      console.log("No documents matched the query. Deleted 0 documents.");
    }
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

deleteOneData();
