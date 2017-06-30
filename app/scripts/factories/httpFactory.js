/**
 * Function for get promise from config.
 * 
 * @param config : Configuration for $http.
 * @return : Instance of 'promise'.
 */
app.factory('httpGetFactory',function($http){
    return function(config){
        return $http(config);
    };
});