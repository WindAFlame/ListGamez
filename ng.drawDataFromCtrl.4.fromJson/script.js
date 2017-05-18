angular
    .module('MainApp', [
        // Main Dependancies
        'ngAria',
        'ngMessages',
        'ngSanitize',
        'ngAnimate'
    ])
    // First Step to code
    /*
    .controller('loadData',function($scope, loadJson){
        $scope.jsonData = loadJson("Hello Json !");
    })
    .factory('loadJson',function(){
        return function(path){
            return path;
        };
    });
    */
    // Second Step
    .controller('loadData',function($scope, httpGetFactory){
        httpGetFactory("bdd.json", successCallback, errorCallback);

        function successCallback (response){
            $scope.jsonData = response.data;
            console.log($scope.jsonData);
        }
        function errorCallback (error){
            $scope.jsonData = null;
            console.log('Error : '+ error)
        }
    })
    /**
     * Function for get reponse from url.
     * 
     * @param url : Url for request.
     * @param successCallback: Process when success
     * @param errorCallback: Process when error
     * @return : Instance of 'http' with the request response.
     */
    .factory('httpGetFactory',function($http){
        return function(url, successCallback, errorCallback){
            return $http({
                method: 'GET', 
                url: url
            }).then(successCallback, errorCallback);
        }
    })
    ;
