app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');

    $stateProvider
        
        // Template for all view
        .state('base', {
            abstract: true,
            templateUrl: 'index.html'
        })

        // HOME PAGE - Welcome
        .state('base.home', {
            name: 'home',
            url: '/index.html',
            templateUrl: 'html/view/homepage.htm'
        })

        // LIST GAME - Listing of all game from json
        .state('base.list', {
            name: 'list',
            url: '/list.html',
            templateUrl: 'html/view/list.htm'
        })
        
        // DETAIL GAME - Detail for a unique game
        .state('base.detail', {
            name: 'detail',
            url: '/{gameId}',
            templateUrl: 'html/view/detail.htm'
        })
        
        // ABOUT - Detail of me and project
        .state('base.about', {
            name: 'about',
            url: '/about.html',
            template: '<h1>Not Implemented</h1>'
        })
        
        // CONTACT - Contact me for any problem with this website
        .state('base.contact', {
            name: 'contact',
            url: '/contact.html',
            template: '<h1>Not Implemented</h1>'
        });

});