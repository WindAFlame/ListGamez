app.controller('listCtrl', function($scope,$http){
    $http.get('media/bdd.json')
       .then(function(res){
          $scope.games = res.data;                
        });
});