app.directive('datafromlocaljson', ['$http', '$scope', function($http, $scope) {
    return {
            restrict: 'E',
            scope:{
                src:"="
            },
            link: function($rootScope) {
                $http.get($scope.src)
                    .then(function(res){
                        $rootScope.data = res.data;
                    });
            }
        };
}]);