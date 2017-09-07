/**
 * 
 */
app.service("fileReader", function($q) {
    
    /**
     * 
     * @param {*} reader 
     * @param {*} deferred 
     * @param {*} scope 
     */
    function onLoad(reader, deferred, scope) {
        return function () {
            scope.$apply(function () {
                deferred.resolve(reader.result);
            });
        };
    };

    /**
     * 
     * @param {*} reader 
     * @param {*} deferred 
     * @param {*} scope 
     */
    function onError(reader, deferred, scope) {
        return function () {
            scope.$apply(function () {
                deferred.reject(reader.result);
            });
        };
    };

    /**
     * 
     * @param {*} deferred 
     * @param {*} scope 
     */
    function getReader(deferred, scope) {
        let reader = new FileReader();
        reader.onload = onLoad(reader, deferred, scope);
        reader.onerror = onError(reader, deferred, scope);
        return reader;
    };

    /**
     * 
     * @param {*} file 
     * @param {*} scope 
     */
    function readAsText(file, scope) {
        let deferred = $q.defer();
    
        let reader = getReader(deferred, scope);         
        reader.readAsText(file);
            
        return deferred.promise;
    };

    return {
        readAsText: readAsText 
    };
});