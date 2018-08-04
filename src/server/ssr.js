import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './components/app';


const page = (title, content) => {
  return `
  <!DOCTYPE html>
  <html>

  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
  </head>

  <body>
    <div id="js-content">${content}</div>
    <script type="text/javascript" src="dist/js/bundle.js"></script>
  </body>

  </html>
`;
};

const render = (title) => {
  const content = renderToString(
    <App />
  );
  return page(title, content);
};

module.exports = {
  render
};
