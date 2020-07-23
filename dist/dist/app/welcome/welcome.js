angular.module("myApp")
  .controller("welcomeCtrl", function ($scope, $location, $rootScope) {
    
    $scope.logout = function () {
      console.log($scope.isLoggedIn);
      $scope.isLoggedIn = false;
      console.log($scope.isLoggedIn);

      $rootScope.$broadcast("logoutUpdated", {
        isLoggedIn: $scope.isLoggedIn,
      });
      $location.path("/login");
    };

    $scope.$on("loginUpdated", function (event, args) {
      $scope.isLoggedIn = args.isLoggedIn;
    });
  });
