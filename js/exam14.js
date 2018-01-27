var app14 = angular.module("app14", ["ngSanitize"]);

app14.controller("mainCtrl", function($scope, $window, $location, $interval, $log, $exceptionHandler, $sanitize) {

  $scope.greetUser = function(userName){
    $window.alert("Hello " + userName);
  };


  $scope.currURL = $location.absUrl();
  $scope.theProtocol = $location.protocol();
  $scope.currHost = $location.host();
  $scope.currPort = $location.port();
  $location.path("#/the/path");
  $scope.currPath = $location.path();
  $location.search("randon=stuff");
  $scope.currSearch = $location.search();

  $interval(function() {
    var hour = new Date().getHours();

    var minutes = ("0" + new Date().getMinutes()).slice(-2);

    var seconds = ("0" + new Date().getSeconds()).slice(-2);

    $scope.time = hour + ":" + minutes + ":" + seconds;
  }, 2000);




});
