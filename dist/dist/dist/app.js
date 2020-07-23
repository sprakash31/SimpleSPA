
var app = angular.module("myApp", ["ngRoute"]);

app.factory('loginService', function($http) {
  debugger
  var sampleObj = {};
  sampleObj.Login = function (username,password){
    $http({
      method : "POST",
      url : "http://localhost:8000/login",username,password
    }).then(function mySuccess(response) {
       debugger
       return true;
      }, function myError(response) {
       return false;
    });
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
