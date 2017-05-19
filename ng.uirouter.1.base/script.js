var app = angular
    .module('MainApp', [
        // Main Dependancies
        'ngAria',
        'ngMessages',
        'ngSanitize',
        'ngAnimate',
        'ui.router'
    ])
    .config(function($stateProvider, $urlRouterProvider) {
    
        $urlRouterProvider.otherwise('/home.html');

        $stateProvider

            .state('helloworld', {
                name: 'helloworld',
                url: '/home.html',
                templateUrl: '/view/helloworld.html'
            })
    });

// Fix animate in view for MDL.
/*
app.run(function($rootScope, $location, $timeout) {
    $rootScope.$on('$viewContentLoaded', function() {
        $timeout(function() {
            componentHandler.upgradeAllRegistered();
        });
    });
});;
*/
