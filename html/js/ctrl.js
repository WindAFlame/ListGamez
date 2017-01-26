app.controller('listCtrl', function($scope,$http){
    $http.get('media/bdd.json').success(function(data) {
        $scope.games = data;
    });
});