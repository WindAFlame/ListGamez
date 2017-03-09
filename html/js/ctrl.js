app.controller('listCtrl', function($scope,$http){
    // Load Bdd
    $http.get('media/bdd.json')
       .then(function(res){
          $scope.games = res.data;                
        });
});


app.controller('detailCtrl', function($scope,$http,$stateParams,$filter){
    // Load Bdd
    var gameById = null;
    $http.get('media/bdd.json')
       .then(function(res){    
          gameById = $filter('filter')(res.data, {id: $stateParams.gameId });
        });
    // Parameters for loadPage
    console.log("gameId : "+$stateParams.gameId)
    console.log("gameinfo : "+gameById)
});