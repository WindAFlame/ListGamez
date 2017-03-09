app.controller('listCtrl', function($scope,$http){
    // Load Bdd
    $http.get('media/bdd.json')
       .then(function(res){
          $scope.games = res.data;                
        });
});


app.controller('detailCtrl', function($scope,$http,$stateParams){
    // Test with $stateParams
    console.log('StateParams = '+$stateParams+'.');
    console.log('StateParams.id = '+$stateParams.id+'.');
    // Load Bdd
    $http.get('media/bdd.json')
       .then(function(res){
          var games = res.data;                
        });
});