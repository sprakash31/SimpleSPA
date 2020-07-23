
describe("LoginCtrl", function () {
 
  beforeEach(angular.mock.module("myApp"));
   
  var $scope, $controller, $rootScope;
     
  beforeEach(inject(function (_$controller_, _$rootScope_) {
  
  $controller = _$controller_;
  $rootScope = _$rootScope_;
    }));
   
  beforeEach(function () {
  $scope = $rootScope.$new() ;
  $controller = $controller("LoginCtrl", { $scope:$scope });
    });
   
  it('Login function should be works as expected', function () {
   $scope.username = "test";
   $scope.password = "test";
  $scope.login($scope);
  expect($scope.successValue).toEqual(true);
    });
   
    it('Login function should be works as correct for invalid username', function () {
      $scope.username = "demo";
      $scope.password = "test";
     $scope.login($scope);
     expect($scope.failedValue).toEqual(true);
       });

       it('Login function should be works as correct for invalid password', function () {
        $scope.username = "test";
        $scope.password = "demoValue";
       $scope.login($scope);
       expect($scope.failedPassword).toEqual(true);
         });

        
   
  });
  
  