app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');

    $stateProvider
        
        // HOME PAGE - Welcome
        .state('home', {
            name: 'home',
            url: '/',
            templateUrl: 'html/view/homepage.htm'
        })

        // LIST GAME - Listing of all game from json
        .state('list', {
            name: 'list',
            url: '/list',
            templateUrl: 'html/view/list.htm'
        })
        
        // DETAIL GAME - Detail for a unique game
        .state('detail', {
            name: 'detail',
            url: '/detail',
            template: '<h1>Not Implemented</h1>'
        });

});