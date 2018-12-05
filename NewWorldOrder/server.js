const express = require("express");

const app = express();

app.get("/api/hello", (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8"
  });

  // Send a simple message in HTML.
  res.write("<h1>Hey Astrid:) Welcome to your backend!</h1>");
  res.end();
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
