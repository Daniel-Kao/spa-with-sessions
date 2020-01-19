const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../../config/auth");

router.get("/", (req, res) => {
  res.status(200).json({
    posts: [
      { title: "hahah", id: 1 },
      { title: "hahal", id: 2 }
    ]
  });
});

module.exports = router;
