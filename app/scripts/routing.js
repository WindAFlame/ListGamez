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
        // Data from bundle/homepage
        .state('base.layout.homepage', {
            name: 'home',
            url: '/home.html',
            views: {
                'content@base': {
                    templateUrl: 'app/views/homepage/content.html'
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
