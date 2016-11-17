

'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaSimpleRouter = require('koa-simple-router');

var _koaSimpleRouter2 = _interopRequireDefault(_koaSimpleRouter);

var _koaSwig = require('koa-swig');

var _koaSwig2 = _interopRequireDefault(_koaSwig);

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _koaConvert = require('koa-convert');

var _koaConvert2 = _interopRequireDefault(_koaConvert);

require('babel-core/register');

require('babel-polyfill');

var _config = require('./conf/config');

var _config2 = _interopRequireDefault(_config);

var _controllerInit = require('./controllers/controllerInit');

var _controllerInit2 = _interopRequireDefault(_controllerInit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//koa1转化器

//koa-swig 是koa1的，里面函数是generator函数，需要手动用next执行，如果要自动执行需要用co模板

var app = new _koa2.default(); //渲染模板用的模块


app.context.render = _co2.default.wrap((0, _koaSwig2.default)({
  root: _config2.default.get('viewDir'),
  autoescape: true,
  cache: 'memory',
  ext: 'html', //文件扩展名
  writeBody: false
}));
_controllerInit2.default.getAllrouters(app, _koaSimpleRouter2.default); //初始化controller
app.use((0, _koaConvert2.default)((0, _koaStatic2.default)(_config2.default.get('staticDir'))));

app.listen(_config2.default.get('port'));
console.log('正在监听端口：' + _config2.default.get('port'));
module.exports = app;