const { browser } = require("protractor");

describe('Sample Login', function() {
    it('should have a title', function() {
      browser.get('/');
  
      expect(browser.getTitle()).toEqual('SampleLogin');
      // browser.wait(1000);
      element(by.xpath("//a[text()='Login']")).click();
 
      element(by.model('data.username')).sendKeys('test');
      element(by.model('data.password')).sendKeys('test');
 
      element(by.xpath('//a[@ng-click="login(data)"]')).click();
 
      expect(element(by.binding('isLoggedIn'))).toBe('true');
        browser.get('/#/main');
      expect(browser.getCurrentUrl()).toMatch('/main');
 
      element(by.xpath('//a[text()="AboutUs"]')).click();
      expect(browser.getCurrentUrl()).toMatch('/aboutUs');
      // browser.wait(1000)
      // element(by.xpath('//a[text()="ContactUs"]')).click();
      // expect(browser.getCurrentUrl()).toMatch('/contactUs');
      // browser.wait(1000)
      // element(by.xpath('//a[text()="OurPolicy"]')).click();
      // expect(browser.getCurrentUrl()).toMatch('/ourPolicy');
      // browser.wait(1000)
      // element(by.xpath('//a[@ng-click="logout()"]')).click();
      // expect(browser.getCurrentUrl()).toMatch('/login');


 
    });

 
  });