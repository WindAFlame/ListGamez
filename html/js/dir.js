app.directive('datafromjson', function(){
    return {
            restrict: 'A',
            link: function($scope,$http) {
                $http.get('media/bdd.json')
                    .then(function(res){
                        $scope.data = res.data;
                        if ($scope.data!=null){        
                            console.log("Data loaded from json.")
                        }
                    });
            }
        };
});