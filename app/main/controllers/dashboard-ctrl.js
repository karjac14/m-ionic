'use strict';
angular.module('main')
  .controller('DashboardCtrl', function($log, $scope, $rootScope, $state) {

    $scope.goLogin = function (){
      $state.go('main.login');
    };

    $scope.login();


  });
