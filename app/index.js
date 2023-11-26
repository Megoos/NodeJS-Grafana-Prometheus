const client = require("prom-client");
const express = require("express");
const path = require("path");

const memoryLeak = require("./memory-leak");

const app = express();

// Initialize metrics
client.collectDefaultMetrics();

// Home page
app.get("/", (_req, res) => {
  res.sendFile(path.resolve(path.join(__dirname, "index.html")));
});

// Report Prometheus metrics on /metrics
app.get("/metrics", async (_req, res) => {
  try {
    res.set("Content-Type", client.register.contentType);
    res.end(await client.register.metrics());
  } catch (err) {
    res.status(500).end(err);
  }
});

// Memory leak on /leak
app.get("/leak", (req, res) => {
  memoryLeak();
  res.send("Memory leak!");
});

// Run the server
app.listen(9200, "0.0.0.0", () => console.log("App started!"));
