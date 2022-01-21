const express = require("express");
const mongoose = require("mongoose");
const postRouter = require("./routes/postRoutes.js");

const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.nwdyk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);

app.use(postRouter);

app.listen(3000, () => {
  console.log("Server is running...");
});