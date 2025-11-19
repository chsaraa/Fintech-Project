const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("group6 FinTech backend is running 🚀");
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    team: "group6",
    track: "A",
  });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
