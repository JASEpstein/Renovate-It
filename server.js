const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const routes = require("./routes");
const passport = require("passport");
const bodyParser = require("body-parser");

const users = require("./routes/api/users.js");

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
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}
// Add routes, both API and view
app.use(routes);

dotenv.config();

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI, 
    {useNewUrlParser: true})
    .then(console.log("Mongoose Connected!!"));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> Express Server is running on PORT ${PORT}!`);
});
