require("dotenv").config();

const express = require("express");
const serverless = require("serverless-http");
const bodyParser = require("body-parser");

const app = express();
const apiRoute = "/.netlify/functions/server";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router();

router.get("/api/test", (req, res) => {
  res
    .status(200)
    .json({message: 'Endpoint is working' });
});

app.use(apiRoute, router);

module.exports = app;
module.exports.handler = serverless(app);