const express = require('express');

const router = express.Router();

const methodOverride = require('method-override');
router.use(methodOverride('_method'))

router.use(express.urlencoded({ extended: true}));

// Controller
const articleCtrl = require("../controllers/articles");

// Routes
router.get("/article/add", articleCtrl.article_create_get);
router.post("/article/add", articleCtrl.article_create_post);
router.get("/article/index", articleCtrl.article_index_get);
router.get("/article/detail", articleCtrl.article_show_get);
router.get("/article/delete", articleCtrl.article_delete_get);

// Export
module.exports = router;




