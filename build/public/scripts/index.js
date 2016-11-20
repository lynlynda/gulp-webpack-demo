'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _indexadd = require('./indexadd');

var _indexadd2 = _interopRequireDefault(_indexadd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//声明父类
var praiseButton = function () {
  function praiseButton(num, element) {
    _classCallCheck(this, praiseButton);

    //初始化构造 最初点击数为0
    this.num = num;
    //注册子类点击按钮
    this.element = element;
  }

  _createClass(praiseButton, [{
    key: 'sendAction',
    value: function sendAction(num) {

      _axios2.default.get('/getdata?num=' + num).then(function (response) {
        alert(response.data.msg);
      }).catch(function (err) {
        alert('http error');
      });
    }
  }]);

  return praiseButton;
}();
//创建并继承大拇指子类 并真正传入要要实现的页面元素


var thumb = function (_praiseButton) {
  _inherits(thumb, _praiseButton);

  function thumb(num, element) {
    _classCallCheck(this, thumb);

    return _possibleConstructorReturn(this, (thumb.__proto__ || Object.getPrototypeOf(thumb)).call(this, num, element));
  }

  return thumb;
}(praiseButton);

//输出thumb模块


exports.default = thumb;
//声明变量 构造类 执行点击动作
// let f = new thumb(0, $('#thumb'));
// f.clickAction();