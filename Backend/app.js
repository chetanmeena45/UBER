// const dotenv = require("dotenv");
// dotenv.config();
// const express = require("express");
// const cors = require("cors");
// const app = express();
// const cookieParser = require("cookie-parser");
// const connectToDb = require("./db/db");
// const rideRoutes = require("./routes/ride.routes");
// const userRoutes = require("./routes/user.routes");
// const captainRoutes = require("./routes/captain.routes");

// connectToDb();

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.use("/users", userRoutes);
// app.use("/captains", captainRoutes);
// app.use("/maps", require("./routes/maps.routes"));
// app.use("/rides", rideRoutes);

// module.exports = app;

// app.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const connectToDb = require("./db/db");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Connect to MongoDB
connectToDb();

// Optional: Setup routes
app.get("/", (req, res) => {
  res.send("API is working 🚀");
});

module.exports = app;
