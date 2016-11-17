'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = new Map();
config.set('port', '8080');
config.set('viewDir', _path2.default.join(__dirname, '..', 'views'));
config.set('staticDir', _path2.default.join(__dirname, '..'));
exports.default = config;