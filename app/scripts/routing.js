/*

 */
app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('home.html');

    $stateProvider

        // Partial
        .state('base', {
            abstract: true,
            views: {
                'layout@': {
                    templateUrl: 'app/views/shared/layout.html',
                    controller: 'baseController'
                }
            }            
        })
        .state('base.layout', {
            abstract: true,
            views: {
                'header@base': {
                    templateUrl: 'app/views/base/header.html',
                    controller: 'headerController'
                },
                'footer@base': {templateUrl: 'app/views/base/footer.html'}
            }
        })
        // Homepage
        .state('base.layout.homepage', {
            url: '/home.html',
            views: {
                'content@base': {
                    templateUrl: 'app/views/homepage/content.html'
                }
            }
        })
        // Games
        .state('base.layout.game', {
            abstract: true,
            resolve: {
                gamesData:  function(httpFactory){
                    return httpFactory({
                        method: 'GET',
                        url:'media/data.json'
                    })
                    .then (function (result) {
                        return result.data;
                    });
                }
            }
        })
        // Game List
        .state('base.layout.game.list', {
            url: '/games.html',
            views: {
                'content@base': {
                    templateUrl: 'app/views/games/list.html'
                }
            }
        })
/*
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