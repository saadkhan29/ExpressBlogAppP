const express = require('express');

const router = express.Router();

router.use(express.urlencoded({ extended: true}));

// Controller
const articleCtrl = require("../controllers/articles");

// Routes
router.get("/article/add", articleCtrl.article_create_get);
router.post("/article/add", articleCtrl.article_create_post);


// Export
module.exports = router;




