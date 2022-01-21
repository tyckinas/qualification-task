const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const postRouter = require("./routes/postRoutes.js");

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.nwdyk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(postRouter);

app.listen(3000, () => {
  console.log("Server is running...");
});
