require('dotenv').config();

const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const render = route => (req, res) => {
  app.render(req, res, route, {
    ...req.query,
    ...req.params,
  });
};

app.prepare()
  .then(() => {
    const server = express();
    const expose = url => server.get(url, render(url));

    server.use(bodyParser.urlencoded({ extended: true }));
    server.set('trust proxy', true);

    // Directly exposed endpoints.
    expose('/');

    // Special endpoints.

    server.get('*', (req, res) => {
      handle(req, res, req.url);
    });

    server.listen(port, (err) => {
      if (err) throw err;
    });
  });
