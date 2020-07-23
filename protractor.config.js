// exports.config = {

//     allScriptsTimeout: 11000,
  
//     specs: [
//       './app'
//     ],
  
//     capabilities: {
//       browserName: 'chrome'
//     },
  
//     baseUrl: 'http://localhost:3000/',
  
//     framework: 'jasmine',
  
//     jasmineNodeOpts: {
//       defaultTimeoutInterval: 30000
//     }
  
//   };
  

    

exports.config = {
framework:"jasmine",
//   seleniumServerJar:"./node_modules/protractor//node_modules/webdriver-manager/selenium/selenium-server-standalone-3.141.59.jar",
// seleniumAddress: 'http://localhost:4444/wd/hub',
specs: ["e2e test/e2eTest.js"],
capabilities: {
browserName:"chrome",
  },
baseUrl:"http://localhost:5500/"

 
};

