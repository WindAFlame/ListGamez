app.controller('listCtrl', function($scope,$http){
    // Load Bdd
    $http.get('media/bdd.json')
       .then(function(res){
          $scope.games = res.data;                
        });
});


app.controller('detailCtrl', function($scope,$http,$stateParams,$filter){
    
    // Load Bdd
    $http.get('media/bdd.json')
       .then(function(res){
          $scope.gameById = $filter('filter')(res.data, {id: $stateParams.gameId });
        });
});