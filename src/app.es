

'use strict';


import Koa from 'koa';
import router from 'koa-simple-router';

import render from 'koa-swig'; //渲染模板用的模块
import co from 'co'; //koa-swig 是koa1的，里面函数是generator函数，需要手动用next执行，如果要自动执行需要用co模板

import server from 'koa-static';

import convert from 'koa-convert';//koa1转化器

import 'babel-core/register';
import 'babel-polyfill';

import config from './conf/config';
import controllers from './controllers/controllerInit';
const app = new Koa();

app.context.render = co.wrap(render({
  root: config.get('viewDir'),
  autoescape: true,
  cache: 'memory',
  ext: 'html', //文件扩展名
  writeBody: false
}))
controllers.getAllrouters(app,router);//初始化controller
app.use(convert(server(config.get('staticDir'))))


app.listen(config.get('port'));
console.log('正在监听端口：' + config.get('port'))
module.exports = app