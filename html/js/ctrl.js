app.controller('listCtrl', function($scope,$http){
    // Load Bdd
    $http.get('media/bdd.json')
       .then(function(res){
          $scope.games = res.data;                
        });
});


app.controller('detailCtrl', function($scope,$http,$stateParams){
    // Load Bdd
    $http.get('media/bdd.json')
       .then(function(res){    
          var gameById = $filter('filter')(res.data, {id: $stateParams.gameId });
        });
    // Parameters for loadPage
    console.log("gameinfo for "+$stateParams.gameId+" : "+gameById)
});