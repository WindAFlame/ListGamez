app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.when("", "/home.html");
    $urlRouterProvider.when("/", "/home.html");
    $urlRouterProvider.otherwise('/home.html');

    $stateProvider

        // HOME PAGE - Welcome
        .state('home', {
            name: 'home',
            url: '/home.html',
            templateUrl: 'html/view/homepage.htm'
        })

        .state('game', {
            abstract: true,
            url: '/game',
            templateUrl: 'html/view/game.htm',
            resolve: {
                gamesData:  function($http){
                    return $http.get('media/bdd.json')
                    .then (function (result) {
                        return result.data;
                    });
                }
            },
            controller: 'gameCtrl'
        })
        
        // LIST GAME - Listing of all game from json
        .state('game.list', {
            name: 'list',
            url: '/list.html',
            templateUrl: 'html/view/game.list.htm'
        })
        
        // DETAIL GAME - Detail for a unique game
        .state('game.detail', {
            name: 'detail',
            url: '/id={gameId}',
            templateUrl: 'html/view/game.detail.htm'
        })
        
        // ABOUT - Detail of me and project
        .state('about', {
            name: 'about',
            url: '/about.html',
            template: '<h1>Not Implemented</h1>'
        })
        
        // CONTACT - Contact me for any problem with this website
        .state('contact', {
            name: 'contact',
            url: '/contact.html',
            template: '<h1>Not Implemented</h1>'
        });

});

// Fix animate in view
app.run(function($rootScope, $location, $timeout) {
    $rootScope.$on('$viewContentLoaded', function() {
        $timeout(function() {
            componentHandler.upgradeAllRegistered();
        });
    });
});