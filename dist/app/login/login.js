angular.module("myApp").controller(
  "LoginCtrl",

  function ($scope, $location, $rootScope, loginService) {
    debugger
    // var userName = "test";
    // var password = "test";
    $scope.isLoggedIn = "false";

    $scope.login = function(data){
     $scope.sample = loginService.Login(data);
     if($scope.sample){
      $scope.successValue = true;
      $scope.isLoggedIn = "true";
      $location.path("/main");
      $rootScope.$broadcast("loginUpdated", {
        isLoggedIn: $scope.isLoggedIn,
      });
     } else {
      $scope.failedPassword = true;
      alert("Invalid Password");
    }
    }

    // $scope.login = function (data) {
    //   $scope.successValue = false;
    //   $scope.failedValue = false;
    //   $scope.failedPassword = false;
    //   if (userName == data.username) {
    //     if (password === data.password) {
         
    //       $scope.successValue = true;
    //       $scope.isLoggedIn = "true";
    //       $location.path("/main");
    //       $rootScope.$broadcast("loginUpdated", {
    //         isLoggedIn: $scope.isLoggedIn,
    //       });

    //     } else {
    //       $scope.failedPassword = true;
    //       alert("Invalid Password");
    //     }
    //   } else {
    //     $scope.failedValue = true;
    //     alert("Invalid Username");
    //   }
    // };

    $scope.$on("logoutUpdated", function (event, args) {
      $scope.isLoggedIn = args.isLoggedIn;
    });
  }
);
