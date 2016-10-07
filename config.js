angular.module('devMtnSocial')
  .config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      views: {
        header: {
          templateUrl: '/components/headers/header1.html'
        },
        body: {
          templateUrl: '/components/entry/entry.html',
          controller: 'entryCtrl'
        },
        footer: {}
      }
    })

    .state('profile', {
      url: '/profile',
      templateUrl: '/components/profile/profile.html',
      controller: 'profileCtrl'
    })

  $urlRouterProvider
    .otherwise('/');
});
