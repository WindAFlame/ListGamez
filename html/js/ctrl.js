app.controller('gameCtrl', function($scope, gamesData){
    $scope.games = gamesData;          
});

app.controller('gameDetailCtrl', function($scope,$stateParams,$filter){
    $scope.gameById = $filter('filter')($scope.games, {id: $stateParams.gameId })[0];
    componentHandler.upgradeDom();
});