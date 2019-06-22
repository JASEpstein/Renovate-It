const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
//const routes = require("./.temporaryStorage/routes");
const passport = require("passport");
const bodyParser = require("body-parser");

//const users = require("./.temporaryStorage/routes/api/users");

const app = express();
const PORT = process.env.PORT || 3001;


// Define middleware here
// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
  app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
app.use(express.static("client/public"));

// Add routes, both API and view
//app.use(routes);

dotenv.config();

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/users", 
    {useNewUrlParser: true})
    .then(console.log("Mongoose Connected!!"));

// Passport middleware
app.use(passport.initialize());

// Passport config
//require("./.temporaryStorage/config/passport.js.js")(passport);

// Routes
//app.use("/api/users", users);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> Express Server is running on PORT ${PORT}!`);
});
