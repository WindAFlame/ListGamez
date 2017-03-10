app.controller('gameCtrl', function($scope,$http){
  // Load Bdd
    $http.get('media/bdd.json')
       .then(function(res){
          console.log('Load Json File');
          $scope.games = res.data;                
        });
});

app.controller('gameDetailCtrl', function($scope,$stateParams,$filter){
    $scope.gameById = $filter('filter')($scope.games, {id: $stateParams.gameId })[0];
});