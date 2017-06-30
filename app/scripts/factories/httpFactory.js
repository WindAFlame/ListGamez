/**
 * Function for get promise from config.
 * 
 * @param config : Configuration for $http.
 * @return : Instance of 'promise'.
 */
app.factory('httpFactory',function($http){
    return function(config){
        return $http(config);
    };
});