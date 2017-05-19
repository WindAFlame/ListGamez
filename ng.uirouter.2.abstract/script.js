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

            .state('hello',{
                abstract: true,
                templateUrl: '/view/hello.html'
            })
            .state('hello.world', {
                url: '/home.html',
                templateUrl: '/view/hello.world.html'
            })
            
    });
