const seleniumWebdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const service = new chrome.ServiceBuilder('C:\\Softwares\\chromedriver_win32\\chromedriver.exe');

exports.initDriver = () => {
  driver = new seleniumWebdriver.Builder()
                  .forBrowser('chrome')
                  .setChromeService(service)
                  .build();
  return driver;
}
