const mongoose = require("mongoose");

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

//connection
const conn = async () => {
  try {
    const dbConn =
      await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.az8s7bf.mongodb.net/?retryWrites=true&w=majority
      `);
    console.log("conectou ao banco");
    return dbConn;
  } catch (e) {
    console.log(e);
  }
};

conn();

module.exports = conn;
