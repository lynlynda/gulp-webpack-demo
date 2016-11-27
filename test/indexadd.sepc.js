var indexadd = require('../build/public/scripts/indexadd');
//console.log(indexadd)
var expect = require('chai').expect;
describe("单元测试", function() {
  it("单例测试-数字自增1", function() {
    expect(2).to.be.equal(indexadd.default.add(1));
  });
});