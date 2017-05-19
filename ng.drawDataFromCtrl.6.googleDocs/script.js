angular
    .module('MainApp', [
        // Main Dependancies
        'ngAria',
        'ngMessages',
        'ngSanitize',
        'ngAnimate'
    ])
    .controller('loadData',function($scope, googleSheetsToJson){
        // Var
        $scope.jsonData = '';
        // Main
        googleSheetsToJson('',setJsonData);
        // Function
        function setJsonData(val){
            $scope.jsonData = val;
        }
    })
    /**
     * Function for get reponse from url.
     * 
     * @param url : Url for request.
     * @param successCallback: Process when success
     * @param errorCallback: Process when error
     */
    .factory('httpGetFactory',function($http){
        return function(url, successCallback, errorCallback){
            $http({
                method: 'GET', 
                url: url
            }).then(successCallback, errorCallback);
        }
    })
    /**
     * Function to set Json into 'functionToSetVar'
     * 
     * @param googleSheetId : Str
     * @param functionToSetVar : function to use at the end for set var with Json.
     */
    .factory('googleSheetsToJson', function(httpGetFactory){
        return function(googleSheetId,functionToSetVar){

            let url = 'https://spreadsheets.google.com/feeds/list/'+googleSheetId+'/1/public/values?alt=json';

            httpGetFactory(url, successCallback, errorCallback);

            function successCallback (response){
                var entries = response.data.feed.entry;
                result = [];
                for (key in entries) {
                    var content = entries[key];
                    var data = {};
                    var log = []
                    angular.forEach(content, function(value, key) {
                        if (key.match("gsx")){
                            data[key.replace('gsx$','')] = value['$t'];
                        };
                    });  
                    result.push(data);
                }
                functionToSetVar(result);
            }
            function errorCallback (error){
                functionToSetVar(null);
                console.log('Error : '+ error);
            }
        } 
    });
