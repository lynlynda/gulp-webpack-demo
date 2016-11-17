require('../styles/index.css');
import xtag from 'x-tag';
import thumb from 'index';
const thumbapp = new thumb;
const data = {
  num: 0
};
xtag.register('x-foo', {
  content: `<div class="hand" id="thumb">
        <div class="finger"></div>
        <div class="finger"></div>
        <div class="finger"></div>
        <div class="finger"></div>
        <div class="finger thumb"></div>
        <div class="arm"></div>
    </div>
    <span class="hide" id="animation">+1</span>`,
  events: {
    click: function(e) {
      if (e.target.id == "thumb") {
        //点击动作 回掉使用箭头函数

        if (data.num < 10) {
          //如果点击数量小于10 直接去掉滤镜
          this.element.css('-webkit-filter', 'grayscale(0)');
          xtag.query('#animation').addClass('num');
          data.num = data.num + add(data.num);
          setTimeout(function() {
            $('#animation').removeClass('num');
          }, 1000);
        } else {
          //如果点击数量大于10 加灰 
          this.element.css('-webkit-filter', 'grayscale(1)');
          data.num = 0;
        }
        thumbapp.sendAction(data.num)
        console.log(data.num);
      }
    }
  }
})