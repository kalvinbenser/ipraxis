const express = require("express");
const morgan = require('morgan')
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");

const app = express();
app.use(morgan("dev"));
const corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());  /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */

const db = require("./app/models");
db.sequelize.sync({alter: true})
.then(() => {
  console.log("DB synced successfully");
})
.catch((err) => {
  console.log("Failed to sync db:" + err.message)
})
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to bezkoder application." });
// });

app.use("/", require("./app/routes/routes.js"))

// set port, listen for requests
const PORT = process.env.PORT || 8080;
const HOST = "0.0.0.0";
app.listen(PORT, HOST, () => {
  console.log(`Server is running on port ${PORT}.`);
});
