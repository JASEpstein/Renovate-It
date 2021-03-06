const express = require('express');
const path = require('path');
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");
const passport = require("passport");


const users = require('./routes/api/users')

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

const db = require('./config/keys').MONGODB_URI;

mongoose.connect(
  db, 
  {useNewUrlParser: true})
  
  .then(() => console.log("Mongoose Connected!!"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Serve the static files from the React app
// app.use(express.static(path.join(__dirname, '/client/build')));

// An api endpoint that returns a short list of items
//app.get(APIroutes);

// Handles any requests that don't match the ones above
// app.get('*', (req,res) =>{
//     res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });

//dotenv.config();

const port = process.env.PORT || 5000;

console.log(process.env);

app.listen(port, () => console.log(`App is listening on port ${port} !`));


