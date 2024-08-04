const express = require("express");
const app = express();

const port = 8000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/", (req, res) => {
  const payload = req.body;
  res.send(payload);
});

app.listen(port, () => {
  console.log("Server running in port " + port);
});
