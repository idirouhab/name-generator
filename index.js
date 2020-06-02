require("newrelic");
const { hostNameGenerator, getRandomItem, getMix } = require("./constants");
const express = require("express");
const app = express();

const LIMIT = 100000;
app.get("/api/hostname/:number", (req, res) => {
  const amount = req.params.number > LIMIT ? LIMIT : req.params.number;
  res.send({ names: Array.from({ length: amount }, () => hostNameGenerator()) });
});

app.get("/api/application/:number", (req, res) => {
  const amount = req.params.number > LIMIT ? LIMIT : req.params.number;
  res.send({ names: Array.from({ length: amount }, () => getRandomItem("application")) });
});

app.get("/api/service/:number", (req, res) => {
  const amount = req.params.number > LIMIT ? LIMIT : req.params.number;
  res.send({ names: Array.from({ length: amount }, () => getRandomItem("service")) });
});

app.get("/api/event-source/:number", (req, res) => {
  const amount = req.params.number > LIMIT ? LIMIT : req.params.number;
  res.send({ names: Array.from({ length: amount }, () => getRandomItem("eventSource")) });
});

app.get("/api/metric/:number", (req, res) => {
  const amount = req.params.number > LIMIT ? LIMIT : req.params.number;
  res.send({ names: Array.from({ length: amount }, () => getRandomItem("metric")) });
});

app.get("/api/status/:number", (req, res) => {
  const amount = req.params.number > LIMIT ? LIMIT : req.params.number;
  res.send({ names: Array.from({ length: amount }, () => getRandomItem("status")) });
});

app.get("/api/data-center/:number", (req, res) => {
  const amount = req.params.number > LIMIT ? LIMIT : req.params.number;
  res.send({ names: Array.from({ length: amount }, () => getRandomItem("dc")) });
});

app.get("/api/mix/:number", (req, res) => {
  const amount = req.params.number > LIMIT ? LIMIT : req.params.number;
  res.send({ data: Array.from({ length: amount }, () => getMix()) });
});

app.get("/api/environment/:number", (req, res) => {
  const amount = req.params.number > LIMIT ? LIMIT : req.params.number;
  res.send({ names: Array.from({ length: amount }, () => getRandomItem("env")) });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
  console.log(`Running  on port ${PORT}`);
});
