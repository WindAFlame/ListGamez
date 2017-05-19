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
                views: {
                    /*
                    // <div ui-view="header" />
                    "header": {
                        templateUrl: '/view/header.html'
                    },
                    // <div ui-view />
                    "": {},
                    // <div ui-view="footer" />
                    "footer": {
                        templateUrl: '/view/footer.html'
                    }
                    Alternative */
                    // <div ui-view="header" /> from index.html
                    "header@": {
                        templateUrl: '/view/header.html'
                    },
                    // <div ui-view /> from index.html
                    "@": {},
                    // <div ui-view="footer" /> from index.html
                    "footer@": {
                        templateUrl: '/view/footer.html'
                    }
                    
                }
            })
            .state('hello.world', {
                url: '/home.html',
                templateUrl: '/view/hello.world.html'
            })
            
    });