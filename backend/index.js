const express = require("express");
const app = express();
const cors = require("cors");
const csvData = [];

const port = 8000;

app.use(express.json());
app.use(express.text());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/", (req, res) => {
  const jsonData = [];
  const payload = req.body.data;
  csvData.push(payload);

  let splitData = csvData.toString().split("\n");
  let header = splitData[0].split(",");

  for (let i = 1; i < splitData.length; i++) {
    let value = splitData[i].split(",");
    let bracket = {};
    for (let j = 0; j < header.length; j++) {
      bracket[header[j].trim()] = value[j].trim();
    }
    jsonData.push(bracket);
  }

  console.log(header);
  res.send(jsonData);
});

app.listen(port, () => {
  console.log("Server running in port " + port);
});
