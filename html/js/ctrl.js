
app.controller('detailCtrl', function($scope,$http,$stateParams,$filter){
  $scope.gameById = $filter('filter')($scope.data, {id: $stateParams.gameId });
});