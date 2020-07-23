
var app = angular.module("myApp", ["ngRoute"]);

app.factory('loginService', function($http) {
  var sampleObj = {};
  sampleObj.Login = function (data){
    if (data.username == "test") {
      if (data.password == "test") {
          return true;
      } else {
        return false;  
      }
    } else {
     return false;
    }
  }
 return sampleObj;
});

app.config(function ($routeProvider, $locationProvider) {

  $routeProvider
    .when("/", {
      templateUrl: "./app/welcome/welcome.html",
    })
    .when("/login", {
      controller: "LoginCtrl",
      templateUrl: "./app/login/login.html",
    })
    .when("/home", {
      templateUrl: "./app/welcome/home.html",
     
    })
    .when("/main", {
      templateUrl: "./app/main/views/main.html",
     
    })
    .when("/aboutUs", {
      templateUrl: "./app/main/views/aboutUs.html",
     
    })
    .when("/contactUs", {
      templateUrl: "./app/main/views/contactUs.html",
     
    })
    .when("/ourPolicy", {
      templateUrl: "./app/main/views/ourPolicy.html",
       controller:'mainCtrl'
    })
    .otherwise({
      redirectTo: "/",
    });
});


app.controller("myCtrl", function ($scope) {
  $scope.techStacks = [
    "Angular Js",
    "Gulp",
    "Bootstrap",
    "Karma",
    "Bower",
    "Protractor",
  ];
  $scope.canShow = false;

  $scope.showList = function () {
    $scope.canShow = true;
  };

  $scope.hideList = function () {
    $scope.canShow = false;
  };

});
