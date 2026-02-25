const express = require("express");

function createApp() {
  const app = express();

  app.get("/", (req, res) => {
    res.status(200).json({ status: "ok" });
  });

  app.get("/products", (req, res) => {
    res.status(200).json({
      items: [
        { id: 1, name: "Keyboard", price: 199 },
        { id: 2, name: "Mouse", price: 99 },
      ],
    });
  });

  return app;
}

module.exports = { createApp };