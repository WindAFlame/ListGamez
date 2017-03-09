app.controller('detailCtrl', function($scope,$rootScope,$stateParams,$filter){
  $scope.gameById = $filter('filter')($rootScope.data, {id: $stateParams.gameId });
});