app.controller('listCtrl', function($scope,$http){
    console.log("listCtrl ="+$scope.data);
    $scope.games = $scope.data;
});


app.controller('detailCtrl', function($scope,$http,$stateParams,$filter){
  $scope.gameById = $filter('filter')($scope.data, {id: $stateParams.gameId });
});