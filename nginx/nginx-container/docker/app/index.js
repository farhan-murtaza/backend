const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("hello from a lightweight container"));

app.listen(9999, () => console.log("Listening on 9999"));
