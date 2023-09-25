const express = require('express');

const router = express.Router();

const methodOverride = require('method-override');
router.use(methodOverride('_method'))

router.use(express.urlencoded({ extended: true}));

// Controller
const articleCtrl = require("../controllers/articles");

// Require isLoggedIn Middleware
const isLoggedIn = require("../helper/isLoggedIn");

// Routes
router.get("/article/add", isLoggedIn, articleCtrl.article_create_get);
router.post("/article/add", articleCtrl.article_create_post);
router.get("/article/index", articleCtrl.article_index_get);
router.get("/article/detail", articleCtrl.article_show_get);
router.get("/article/delete", articleCtrl.article_delete_get);
router.get("/article/edit", articleCtrl.article_edit_get);
router.put("/article/update", articleCtrl.article_update_post);

// Export
module.exports = router;




