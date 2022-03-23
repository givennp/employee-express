const { posts } = require("../database");
const { nanoid } = require("nanoid");

const postsController = {
  getAllPosts: (req, res) => {
  res.status(200).json({
    message: "Get employees",
    result: posts,
  });
}
};

module.exports = postsController;
