'use strict';

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _indexadd = require('./indexadd');

var _indexadd2 = _interopRequireDefault(_indexadd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('../styles/index.css');

var xtag = require('./x-tag-core');
// require('./index');
// var thumb = require('./index');
//console.log(thumb);

var thumbapp = new _index2.default();
var data = {
  num: 0
};
xtag.register('x-foo', {
  content: '<div class="hand" id="thumb">\n        <div class="finger"></div>\n        <div class="finger"></div>\n        <div class="finger"></div>\n        <div class="finger"></div>\n        <div class="finger thumb"></div>\n        <div class="arm"></div>\n    </div>\n    <span class="hide" id="animation">+1</span>',
  events: {
    click: function click(e) {
      //console.log(e)
      console.log(data.num);

      if (e.target.id == "thumb") {
        //点击动作 回掉使用箭头函数

        if (data.num < 10) {
          //如果点击数量小于10 直接去掉滤镜
          (0, _jquery2.default)('#thumb').css('-webkit-filter', 'grayscale(0)');
          (0, _jquery2.default)('#animation').addClass('num');
          data.num = (0, _indexadd2.default)(data.num);
          setTimeout(function () {
            (0, _jquery2.default)('#animation').removeClass('num');
          }, 1000);
        } else {
          //如果点击数量大于10 加灰 
          (0, _jquery2.default)('thumb').css('-webkit-filter', 'grayscale(1)');
          data.num = 0;
        }
        thumbapp.sendAction(data.num);
        console.log(data.num);
      }
    }
  }
});