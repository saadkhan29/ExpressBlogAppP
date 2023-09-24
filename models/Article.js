const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({

  title: String,
  content: String,
  isPublished: Boolean,
  totalWords: Number,
  // author: String,
  // createdAt: Date,
  // updateAt: Date
}, {
  timestamps: true // means createdAt and updatedAt
}
);

const Article = mongoose.model("Article", articleSchema);


// Author Model
const authorSchema = mongoose.Schema({
    name : String,
    emailAddress : String,
    phoneNumber : String,
    article : [articleSchema]
}, {
  timestamps : true
})

const Author = mongoose.model("Author", authorSchema);

module.exports = {Article, Author};

