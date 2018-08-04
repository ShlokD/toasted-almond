'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _app = require('./components/app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var page = function page(title, content) {
  return '\n  <!DOCTYPE html>\n  <html>\n\n  <head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>' + title + '</title>\n  </head>\n\n  <body>\n    <div id="js-content">' + content + '</div>\n    <script type="text/javascript" src="dist/js/bundle.js"></script>\n  </body>\n\n  </html>\n';
};

var render = function render(title) {
  var content = (0, _server.renderToString)(_react2.default.createElement(_app2.default, null));
  return page(title, content);
};

module.exports = {
  render: render
};