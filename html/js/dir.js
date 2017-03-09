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
                        if($rootScope.data!=null){
                            console.log("Data is loaded : "+$rootScope.data);
                        } else {
                            console.log("No data id loaded.");
                        }
                    });
            }
        };
}]);