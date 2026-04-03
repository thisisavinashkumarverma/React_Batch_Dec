require('@babel/register')({
  extensions: ['.js', '.jsx']
});

const express = require('express');
const React = require('react');
const { renderToString } = require('react-dom/server');
const App = require('./app.jsx').default;

const app = express();
const PORT = 8082;

app.get('/', (req, res) => {
  const html = renderToString(React.createElement(App));

  res.send(`
    <html>
      <head>
        <title>My Server</title>
      </head>
      <body>
        <div id="root">${html}</div>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});