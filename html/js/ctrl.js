app.controller('listCtrl', function($scope, $http){
    $scope.games = $http.get('media/bdd.json').success(function(response) {
        return response.data;
    });
});