app.controller('gameCtrl', function($scope,$http){
    $scope.games = gamesData;          
});

app.controller('gameDetailCtrl', function($scope,$stateParams,$filter){
    $scope.gameById = $filter('filter')($scope.games, {id: $stateParams.gameId })[0];
});