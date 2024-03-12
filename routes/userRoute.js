const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });

const { isAuthenticated } = require("../Middleware/verifyJWT.js");
const express = require("express");
const {signup,signin,forgetpassword,resetpassword,saveFeedback, saveGallery} = require("../controllers/usercontroller");
// const userController = require("../controllers/userController");

const router = express.Router();
router.route("/register").post(signup);
router.route("/login").post(signin);
router.route("/forgetpassword").post(forgetpassword);
router.route("/resetpassword/:userId/:accessToken").post(resetpassword);
router.route("/feedback").post(saveFeedback);
router.route("/gallery").post(saveGallery);
router.use(isAuthenticated);
module.exports = router;
