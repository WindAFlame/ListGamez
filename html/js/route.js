app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.when("", "/home");
    $urlRouterProvider.when("/", "/home");
    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME PAGE - Welcome
        .state('home', {
            name: 'home',
            url: '/home.html',
            templateUrl: 'html/view/homepage.htm'
        })

        // LIST GAME - Listing of all game from json
        .state('list', {
            name: 'list',
            url: '/list.html',
            templateUrl: 'html/view/list.htm'
        })
        
        // DETAIL GAME - Detail for a unique game
        .state('detail', {
            name: 'detail',
            url: '/id={gameId}',
            templateUrl: 'html/view/detail.htm'
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