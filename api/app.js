const express = require("express");
const app = express();
const config = require("config");
const port = config.get("port");
const bodyParser = require("body-parser");
const path = require("path");

const results = require("./modules/results");

app.use(bodyParser.json()); // support json encoded bodies
results.init(app);

// catch all other GETs and send them the client app bundle!
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname + "/public/index.html"))
);

app.listen(port, () =>
  console.log(`🚀 Listening on port http://localhost:${port}!`)
);
