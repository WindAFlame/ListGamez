app.directive('datafromlocaljson', ['$http', function($http) {
    return {
            restrict: 'A',
            scope:{
                src:"="
            },
            link: function($scope,$http) {
                $http.get($scope.src)
                    .then(function(res){
                        $scope.data = res.data;
                        if ($scope.data!=null){        
                            console.log("Data loaded from json.")
                        }
                    });
            }
        };
});