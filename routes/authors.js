const express = require('express');

const router = express.Router();

const methodOverride = require('method-override');
router.use(methodOverride('_method'))

router.use(express.urlencoded({ extended: true}));

// Controller
const authorCtrl = require("../controllers/authors");

// Require isLoggedIn Middleware
const isLoggedIn = require("../helper/isLoggedIn");

// Routes
router.get("/author/add", isLoggedIn, authorCtrl.author_create_get);
router.post("/author/add", authorCtrl.author_create_post);
router.get("/author/index", authorCtrl.author_index_get);
router.get("/author/detail", authorCtrl.author_show_get);
router.get("/author/delete", authorCtrl.author_delete_get);
router.get("/author/edit", authorCtrl.author_edit_get);
router.put("/author/update", authorCtrl.author_update_post);

// Export
module.exports = router;




