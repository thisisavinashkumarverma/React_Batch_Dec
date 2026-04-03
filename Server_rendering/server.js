import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./app.jsx";
const app = express();
app.get("/", (req, res) => {
  const html = ReactDOMServer.renderToString(<App />);
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
      </body>
    </html>
  `);
});
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
