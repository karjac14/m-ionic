'use strict';
angular.module('main', [
    'ionic',
    'ngCordova',
    'ui.router',
    // TODO: load other modules selected during generation
  ])
  .config(function($stateProvider, $urlRouterProvider) {

    // ROUTING with ui.router
    $urlRouterProvider.otherwise('/main/dashboard');
    $stateProvider
      // this state is placed in the <ion-nav-view> in the index.html
      .state('main', {
        url: '/main',
        abstract: true,
        templateUrl: 'main/templates/tabs.html'
      })
      .state('main.dashboard', {
        url: '/dashboard',
        views: {
          'tab-dashboard': {
            templateUrl: 'main/templates/dashboard.html',
            controller: 'DashboardCtrl'
          }
        }
      })
      .state('main.tasks', {
        url: '/tasks',
        views: {
          'tab-tasks': {
            templateUrl: 'main/templates/tasks.html',
            controller: 'TasksCtrl'
          }
        }
      })
      .state('main.notifications', {
        url: '/notifications',
        views: {
          'tab-notifications': {
            templateUrl: 'main/templates/notifications.html',
            controller: 'NotificationsCtrl'
          }
        }
      })
      .state('main.activities', {
        url: '/activities',
        views: {
          'tab-activities': {
            templateUrl: 'main/templates/activities.html',
            controller: 'ActivitiesCtrl'
          }
        }
      })
      .state('main.goals', {
        url: '/goals',
        views: {
          'tab-goals': {
            templateUrl: 'main/templates/goals.html',
            controller: 'GoalsCtrl'
          }
        }
      });
  });
