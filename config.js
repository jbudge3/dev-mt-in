angular.module('devMtnSocial', ['ngRoute']).config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/',
      {
        contoller: 'mainControl',
        templateUrl: 'views/initial.html'
      })
    .when('/landing',
      {
        controller: 'mainControl',
        templateUrl: 'views/landing.html'
      })
    .otherwise({ redirectTo: '/'});
}]);
