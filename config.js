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
        footer: {
          templateUrl: 'components/footer/footer.html'
        }
      }
    })

    .state('profile', {
      url: '/profile',
      views: {
        header: {
          templateUrl: '/components/headers/header1.html'
        },
        body: {
          templateUrl: '/components/profile/profile.html',
          controller: 'profileCtrl'
        },
        footer: {
          templateUrl: 'components/footer/footer.html'
        }
      }
    })

  $urlRouterProvider
    .otherwise('/');
});
