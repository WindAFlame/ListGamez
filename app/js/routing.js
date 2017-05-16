app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home.html');

    $stateProvider
/*
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
*/
});

// Fix animate in view
app.run(function($rootScope, $location, $timeout) {
    $rootScope.$on('$viewContentLoaded', function() {
        $timeout(function() {
            componentHandler.upgradeAllRegistered();
        });
    });
});