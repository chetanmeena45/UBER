// const mongoose = require("mongoose");
// function connectToDb() {
//   mongoose
//     .connect(process.env.DB_CONNECT, {})
//     .then(() => {
//       console.log("Connected to DB");
//     })
//     .catch((err) => {
//       console.error("Error connecting to DB:", err);
//     });
// }
// module.exports = connectToDb;
// // This code connects to a MongoDB database using Mongoose.

// db/db.js

// db/db.js
const mongoose = require("mongoose");
require("dotenv").config();

function connectToDb() {
  mongoose
    .connect(process.env.MONGO_URI) // ← no need for options anymore
    .then(() => {
      console.log("✅ Connected to MongoDB Atlas");
    })
    .catch((err) => {
      console.error("❌ Error connecting to MongoDB:", err);
    });
}

module.exports = connectToDb;

