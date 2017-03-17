var app = angular.module('MainApp', [
    // Dependancies
    'ngAria',
    'ngMessages',
    'ngSanitize',
    'ngAnimate',
    'ui.router'
]);

app.run(function($rootScope, $location, $timeout) {
    $rootScope.$on('$viewContentLoaded', function() {
        $timeout(function() {
            componentHandler.upgradeAllRegistered();
        });
    });
});