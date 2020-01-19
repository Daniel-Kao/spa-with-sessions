module.exports = {
  ensureAuthenticated: function(req, res, next) {
    console.log(req.user);
    if (req.isAuthenticated()) {
      return next();
    }
    res.status(401).json({ data: "not authorized" });
  },
  forwardAuthenticated: function(req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    }
    res.redirect("/dashboard");
  }
};
