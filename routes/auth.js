const router = require('express').Router();

// Controller
const authCtrl = require("../controllers/auth");

// Routes
router.get("/auth/signup", authCtrl.auth_signup_get);


// Export
module.exports = router;