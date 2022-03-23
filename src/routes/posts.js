const express = require("express");
const router = express.Router();

const { postsController } = require("../controllers");

router.get("/", postsController.getAllPosts)

module.exports = router;