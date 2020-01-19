const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../../models/User");
const { ensureAuthenticated } = require("../../config/auth");

router.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  let errors = [];

  if (!name || !email || !password) {
    errors.push({ msg: "Please enter all fields" });
  }

  if (password.length < 6) {
    errors.push({ msg: "Password must be at least 6 characters" });
  }

  if (errors.length > 0) {
    res.status(500).json({ data: errors });
  } else {
    User.findOne({ email: email }).then(user => {
      if (user) {
        errors.push({ msg: "Email already exists" });
        res.status(500).json({ data: errors });
      } else {
        const newUser = new User({
          name,
          email,
          password
        });

        newUser
          .save()
          .then(user => {
            req.login(user, function(err) {
              if (err) {
                return next(err);
              }
              res.status(200).json({ data: "success" });
            });
          })
          .catch(err => console.log(err));
      }
    });
  }
});

// Login
router.post("/login", passport.authenticate("local"), function(req, res) {
  res.status(200).json({ data: "success" });
});

router.get("/list", ensureAuthenticated, function(req, res) {
  res.status(200).json({ data: ["danel", "kao"] });
});

router.post("/logout", ensureAuthenticated, function(req, res) {
  req.logout();
  res.status(200).json({ data: "logged out" });
});

router.post("/dashboard", function(req, res) {
  res.status(200).json({ data: "hi out" });
});

router.post("/loginCheck", function(req, res) {
  console.log(req.user);
  if (req.user) {
    res.status(200).json({ data: "success" });
  } else {
    res.status(401).json({ data: "logged out, not authorized" });
  }
});

module.exports = router;
