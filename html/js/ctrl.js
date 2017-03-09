app.controller('listCtrl', function($scope,$http){
  $scope.games = getBdd();      
});
app.controller('detailCtrl', function($scope,$http,$stateParams){
    $scope.games = getBdd();
});

var getBdd = function($http){
  $http.get('media/bdd.json')
    .then(function(res){
      return res.data;                
    });
}