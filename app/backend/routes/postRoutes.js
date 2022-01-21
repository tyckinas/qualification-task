const express = require("express");
const postModel = require("../models/post");
const app = express();

app.get("/posts/:id" , async(request, response) => {
    const post = await postModel.findById(request.params.id)
    try{
        response.send(post)
    }catch(error){
        response.status(500).send(error)
    }
})

app.get("/posts", async (request, response) => {
  const posts = await postModel.find({});

  try {
    response.send(posts);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/posts", async (request, response) => {
    const post = new postModel(request.body);
  
    try {
      await post.save();
      response.send(post);
    } catch (error) {
      response.status(500).send(error);
    }
  });

module.exports = app;