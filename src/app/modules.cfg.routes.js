/*
    Routing Rules & Config
 */
app.config(function($stateProvider, $urlRouterProvider) {
    
    // Redirection when url not known
    $urlRouterProvider.otherwise('home');

    // For others states, look each component of this project.
    $stateProvider
        // Parent of all pages
        .state('layout', layoutState)
        // For route '/home'
        .state('homepage', homepageState)
        // Abstract for route '/game'
        .state('game', gameState)
        // For route '/game'
        .state('gameList', gameListState)
        // For route '/game/id'
        .state('gameDetail', gameDetailState)
        // declare route '/contact'
        .state('contact', contactState);
});

// Fix animate in view
app.run(function($rootScope, $location, $timeout) {

    $rootScope.$on('$viewContentLoaded', function() {
        $timeout(function() {
            componentHandler.upgradeAllRegistered();
        }, 0);
    });
    
});