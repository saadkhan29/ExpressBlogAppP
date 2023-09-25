const router = require('express').Router();

// Controller
const authCtrl = require("../controllers/auth");

// Routes
router.get("/auth/signup", authCtrl.auth_signup_get);
router.post("/auth/signup", authCtrl.auth_signup_post);
router.get("/auth/signin", authCtrl.auth_signin_get);
router.post("/auth/signin", authCtrl.auth_signin_post)


// Export
module.exports = router;