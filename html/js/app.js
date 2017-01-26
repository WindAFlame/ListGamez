var app = angular.module('MainApp', [
    // Dependancies
    'ngAria',
    'ngMessages',
    'ngSanitize',
    'ngAnimate',
    'ui.router'
]);

app.config(["$locationProvider", function($locationProvider) {
  $locationProvider.html5Mode(true);
}]);