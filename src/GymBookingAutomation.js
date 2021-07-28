const { Builder, By, EC, Key, until } = require('selenium-webdriver');
var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;

var browser = null;

const Login = async (username, password) => {
  console.log(username);
  await browser.findElement(By.id('loginLink')).click();
  await browser
    .wait(
      until.elementLocated(
        By.xpath("//*[@id='divLoginOptions']/div[2]/div[2]/div/button")
      ),
      3000
    )
    .click();

  const username_form = browser.findElement(By.id('userNameInput'));
  const password_form = browser.findElement(By.id('passwordInput'));

  username_form.sendKeys(username);
  password_form.sendKeys(password);

  await browser
    .wait(until.elementLocated(By.xpath("//*[@id='submitButton']")), 3000)
    .click();
};

const BookGym = async (time, day) => {
  console.log('day -> ' + day);
  console.log('time -> ' + time);
  await browser
    .wait(
      until.elementLocated(
        By.xpath("//*[@id='divBookingProducts-large']/div[1]/a/img")
      ),
      3000
    )
    .click();
  switch (day) {
    case 0:
      await browser
        .wait(
          until.elementLocated(
            By.xpath(
              "//*[@id='divBookingDateSelector']/div[2]/div[2]/button[1]"
            )
          ),
          3000
        )
        .click();
      break;
    case 1:
      await browser
        .wait(
          until.elementLocated(
            By.xpath(
              "//*[@id='divBookingDateSelector']/div[2]/div[2]/button[2]"
            )
          ),
          3000
        )
        .click();
      break;
    case 2:
      await browser
        .wait(
          until.elementLocated(
            By.xpath(
              "//*[@id='divBookingDateSelector']/div[2]/div[2]/button[3]"
            )
          ),
          3000
        )
        .click();
      break;
    case 3:
      await browser
        .wait(
          until.elementLocated(
            By.xpath(
              "//*[@id='divBookingDateSelector']/div[2]/div[2]/button[4]"
            )
          ),
          3000
        )
        .click();
      break;
    case 4:
      await browser
        .wait(
          until.elementLocated(
            By.xpath(
              "//*[@id='divBookingDateSelector']/div[2]/div[2]/button[5]"
            )
          ),
          3000
        )
        .click();
      break;
    case 5:
      await browser
        .wait(
          until.elementLocated(
            By.xpath(
              "//*[@id='divBookingDateSelector']/div[2]/div[2]/button[6]"
            )
          ),
          3000
        )
        .click();
      break;
  }

  switch (time) {
    case 0:
      await browser
        .wait(
          until.elementLocated(
            By.xpath("//*[@id='divBookingSlots']/div/div[1]/div/button")
          ),
          3000
        )
        .click();
      break;
    case 1:
      await browser
        .wait(
          until.elementLocated(
            By.xpath("//*[@id='divBookingSlots']/div/div[2]/div/button")
          ),
          3000
        )
        .click();
      break;
    case 2:
      await browser
        .wait(
          until.elementLocated(
            By.xpath("//*[@id='divBookingSlots']/div/div[3]/div/button")
          ),
          3000
        )
        .click();
      break;
    case 3:
      await browser
        .wait(
          until.elementLocated(
            By.xpath("//*[@id='divBookingSlots']/div/div[4]/div/button")
          ),
          3000
        )
        .click();
      break;
    case 4:
      await browser
        .wait(
          until.elementLocated(
            By.xpath("//*[@id='divBookingSlots']/div/div[5]/div/button")
          ),
          3000
        )
        .click();
      break;
    case 5:
      await browser
        .wait(
          until.elementLocated(
            By.xpath("//*[@id='divBookingSlots']/div/div[6]/div/button")
          ),
          3000
        )
        .click();
      break;
    case 6:
      await browser
        .wait(
          until.elementLocated(
            By.xpath("//*[@id='divBookingSlots']/div/div[7]/div/button")
          ),
          3000
        )
        .click();
      break;
    case 7:
      await browser
        .wait(
          until.elementLocated(
            By.xpath("//*[@id='divBookingSlots']/div/div[8]/div/button")
          ),
          3000
        )
        .click();
      break;
    case 8:
      await browser
        .wait(
          until.elementLocated(
            By.xpath("//*[@id='divBookingSlots']/div/div[9]/div/button")
          ),
          3000
        )
        .click();
      break;
    case 9:
      await browser
        .wait(
          until.elementLocated(
            By.xpath("//*[@id='divBookingSlots']/div/div[10]/div/button")
          ),
          3000
        )
        .click();
      break;
  }
};

const main = async (username, password, time, day) => {
  var service = new chrome.ServiceBuilder(path).build();
  chrome.setDefaultService(service);

  browser = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();
  browser.manage().window().maximize();
  try {
    await browser.get('https://rec.carleton.ca/booking');
    await Login(username, password);
    await BookGym(time, day);
  } catch (err) {
    console.log(err);
  } finally {
    //await browser.quit();
  }
};

export default main;
