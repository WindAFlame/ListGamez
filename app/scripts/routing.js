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
                    templateUrl: 'app/views/shared/_layout.html',
                    controller: 'baseController'
                }
            }            
        })
        .state('base.layout', {
            abstract: true,
            views: {
                'header@base': {templateUrl: 'app/views/base/header.html'},
                'footer@base': {templateUrl: 'app/views/base/footer.html'}
            }
        })
        // Homepage
        .state('base.layout.homepage', {
            url: '/home.html',
            views: {
                'content@base': {
                    templateUrl: 'app/views/homepage/content.html',
                    controller: 'homepageController'
                }
            }
        })
        // Games
        .state('base.layout.game', {
            abstract: true,
            resolve: {
                jsonDataGames:  function($http){
                    return $http({
                        method: 'GET',
                        url:'media/data.json'
                    })
                    .then(function onSuccess(result){
                        return result.data;
                    })
                    .catch(function onError(result){
                        alert('Cannot get json file !');
                        return null;
                    });
                }
            }
        })
        // Game List
        .state('base.layout.game.list', {
            url: '/games.html',
            views: {
                'content@base': {
                    templateUrl: 'app/views/game.list/content.html',
                    controller: function($scope, jsonDataGames) {
                        $scope.gamesData = jsonDataGames;
                    }
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
