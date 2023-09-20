// API's

// Import Article model
const Article = require("../models/Article");

// Import Moment
const moment = require('moment');

exports.article_create_get = (req, res) => {
  res.render("article/add")
}

exports.article_create_post = (req, res) => {
  console.log(req.body);

  let article = new Article(req.body);

  article.save()
  .then(() => {
    res.redirect("/article/index");
  })
  .catch((err) => {
    console.log(err);
    res.send("Please try again later!!!");
  })
}


exports.article_index_get = (req, res) => {
  Article.find()
  .then( (articles) => {
    res.render("article/index", {articles, moment})
  })
  .catch( (err) => {
    console.log(err);
  })
}


