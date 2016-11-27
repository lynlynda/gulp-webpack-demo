var webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until;
// console.log(webdriver)
// console.log(until.alertIsPresent)
var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

driver.get('http://127.0.0.1:8080');
driver.findElement(By.id('thumb')).click();
driver.wait(until.alertIsPresent(), 8000);
driver.switchTo().alert().then(function(alert) {
  console.log(alert.getText().value_)
  return alert.dismiss();
});

driver.quit();