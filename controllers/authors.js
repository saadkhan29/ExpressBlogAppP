// API's

// Import Article, Author model
const {Article} = require("../models/Article");
const {Author} = require("../models/Author");

// Import Moment
const moment = require('moment');

exports.author_create_get = (req, res) => {
  res.render("author/add")
}

exports.author_create_post = (req, res) => {
  console.log(req.body);

  let author = new Author(req.body);

  author.save()
  .then(() => {
    res.redirect("/author/index");
  })
  .catch((err) => {
    console.log(err);
    res.send("Please try again later!!!");
  })
}


exports.author_index_get = (req, res) => {
  Author.find()
  .then( (authors) => {
    res.render("author/index", {authors, moment})
  })
  .catch( (err) => {
    console.log(err);
  })
}

exports.author_show_get = (req, res) => {
  console.log(req.query.id);
  Author
  .findById(req.query.id)
  .then( (author) => {
    res.render("author/detail", {author, moment});
  })
  .catch((err) => {
    console.log(err);
  });
}

exports.author_delete_get = (req, res) =>{
  console.log(req.query.id)
  Author.findByIdAndDelete(req.query.id)
  .then(() => {
    res.redirect("/author/index")
  })
  .catch( (err) => {
    console.log(err)
  })
}


exports.author_edit_get = (req, res) => {
  console.log(req.query.id);
  Author.findById(req.query.id)
  .then((author) => {
    res.render("author/edit", {author})
  })
  .catch((err) => {
    console.log(err)
  })
}

exports.author_update_post = (req, res) => {
  console.log(req.body.id)
  Author.findByIdAndUpdate(req.body.id, req.body)
  .then(() => {
    res.redirect("/author/index")
  })
  .catch( (err) => {
    console.log(err)
  })
}

