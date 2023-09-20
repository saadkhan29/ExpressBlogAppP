// API's

// Import Article model
const Article = require("../models/Article");

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

