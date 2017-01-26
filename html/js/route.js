app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            name: 'home',
            url: '/',
            templateUrl: 'html/view/homepage.htm'
        })

        // HOME STATES AND NESTED VIEWS ========================================
        .state('list', {
            name: 'list',
            url: '/list',
            templateUrl: 'html/view/list.htm'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('detail', {
            name: 'detail',
            url: '/detail',
            template: '<h3>Its the UI-Router hello world app!</h3>'
        });

});