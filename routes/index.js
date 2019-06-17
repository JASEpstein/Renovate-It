const express = require("express");

const app = express();

module.exports = (app) => {
    app.get("/", (req, res) => {
        res.json({
            message: "Route is working!"
        });
    });

}



