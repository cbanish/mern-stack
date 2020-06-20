const express = require("express");
const app = express();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//express middleware
app.use(bodyParser.json());

const url = require("./config/key").dburi;

//Connec to DB
mongoose
  .connect(url)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`app listenng on port ${PORT}`);
});

//Configure app routes

const router = require("./routes/route");
app.use("/api/items", router);
