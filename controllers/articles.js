// API's

// Import Article, Author model
const {Article} = require("../models/Article");
const {Author} = require("../models/Author");

// Import Moment
const moment = require('moment');

exports.article_create_get = (req, res) => {
Author.find()
.then((authors) => {
  res.render("article/add", {authors});
})
.catch((err) => {
  console.log(err);
})

 
}

exports.article_create_post = (req, res) => {
  console.log(req.body);

  let article = new Article(req.body);

  article.save()
  .then(() => {
    // res.redirect("/article/index");

    req.body.author.forEach(author => {
      Author.findById(author)
      .then((author) => {
        author.article.push(article);
        author.save();
      })
      .catch((err) => {
        console.log(err)
      })
    })
    res.redirect("/article/index");
  })
  .catch((err) => {
    console.log(err);
    res.send("Please try again later!!!");
  })

  // Author.findById(req.body.author)
  // .then((author) => {
  //   author.article.push(article);
  //   author.save();
  //   res.redirect("/author/index");
  // })
  // .catch((err) => {
  //   console.log(err)
  // });
}


exports.article_index_get = (req, res) => {
  Article.find().populate('author')
  .then( (articles) => {
    res.render("article/index", {articles, moment})
  })
  .catch( (err) => {
    console.log(err);
  })
}

exports.article_show_get = (req, res) => {
  console.log(req.query.id);
  Article
  .findById(req.query.id).populate('author')
  .then( (article) => {
    res.render("article/detail", {article, moment});
  })
  .catch((err) => {
    console.log(err);
  });
}

exports.article_delete_get = (req, res) =>{
  console.log(req.query.id)
  Article.findByIdAndDelete(req.query.id)
  .then(() => {
    res.redirect("/article/index")
  })
  .catch( (err) => {
    console.log(err)
  })
}


exports.article_edit_get = (req, res) => {
  console.log(req.query.id);
  Article.findById(req.query.id)
  .then((article) => {
    res.render("article/edit", {article})
  })
  .catch((err) => {
    console.log(err)
  })
}

exports.article_update_post = (req, res) => {
  console.log(req.body.id)
  Article.findByIdAndUpdate(req.body.id, req.body)
  .then(() => {
    res.redirect("/article/index")
  })
  .catch( (err) => {
    console.log(err)
  })
}



// LAB - 30 mins

// 1. Display Author's information e.g. Author's Name, Email Address, Phone Number in Article Details web page 

// 2. Display Article's Information e.g. Title and content in Authors Details web page.