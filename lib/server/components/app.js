"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(props) {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "p",
      { id: "msg" },
      "Hello World"
    ),
    _react2.default.createElement(
      "button",
      { id: "toggleBtn" },
      "Toggle"
    )
  );
};

exports.default = App;