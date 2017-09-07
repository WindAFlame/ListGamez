/**
 * 
 */
app.service("sessionService", function(fileReader, $state){
    
        let jsonData = initJsonData();
        function getJsonData() {
            return jsonData;
        };
        function setJsonData(data){
            jsonData = data;
        };
        function initJsonData(){
            return {
                "website": { "title": null },
                "homepage": { "title": null, "message": null },
                "contact": { "subject": [], "gform": "" },
                "games": [{ "id": 0, "title": null, "picture": null, "cover": null, 
                    "download": [{ "link": null, "system": [], "name": null, "size": null }], 
                    "info" : { "genre" : [], "developer" : [], "editor": [], "audio": [], "subtitle": [], "system": [], "release": []}
                }]
            };
        };

        let jsonFile = null;
        function getJsonFile(){
            tmp = jsonFile;
            jsonFile = null;
            return tmp;
        };
        function setJsonFile(file){
            jsonFile = file;
        };

        /**
         * 
         */
        function isAuthenticated() {
            return getJsonData().website.title !== null;
        };
    
        /**
         * 
         */
        function loadJsonData(scope) {
            fileReader.readAsText(getJsonFile(),scope)
            .then(function(result) {
                //TODO: ?
                if (checkIntegrity()){
                    setJsonData(JSON.parse(result));
                    swal({
                        type: 'success',
                        title: 'Chargement réussie !.',
                        text: 'Redirection vers l\'acceuil',
                        timer: 2000,
                        showConfirmButton: false
                    }, function(){
                        $state.go('homepage');
                        swal.close();
                    });
                } else {
                    swal({
                        type: 'error',
                        title: 'Le fichier ne correspond pas a celui attendu.'
                    });
                    setJsonData(null);
                };
            });
        };
    
        /**
         * Check all file
         * Loader when it activated
         */
        function checkIntegrity() {
            return true;
        };

        return {
            getJsonData: getJsonData,
            setJsonData: setJsonData,
            setJsonFile: setJsonFile,
            isAuthenticated: isAuthenticated,
            loadJsonFile: loadJsonData
        };
    });
    
    /**
     * 
     */
    app.directive("readText", function(sessionService) {
        return {
          link: function($scope,el) {
            el.bind("change", function(e) {
                const file = (e.srcElement || e.target).files[0];
                sessionService.setJsonFile(file);
            });
          }
        };
    });