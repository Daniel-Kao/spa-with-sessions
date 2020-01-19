const express = require("express");
const passport = require("passport");
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
const connectDB = require("./config/db");

const app = express();

// passport
require("./config/passport")(passport);

// 连接数据库
connectDB();

app.use(express.json());

// Express session
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/users", require("./routes/api/users"));
app.use("/api/posts", require("./routes/api/posts"));

app.listen(6000, () => console.log("server running on port 6000"));
