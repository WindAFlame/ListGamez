app.directive('datafromlocaljson', ['$http', function($http) {
    return {
            restrict: 'E',
            scope:{
                src:"="
            },
            link: function($scope, $rootScope) {
                $http.get($scope.src)
                    .then(function(res){
                        $rootScope.data = res.data;
                    });
            }
        };
}]);