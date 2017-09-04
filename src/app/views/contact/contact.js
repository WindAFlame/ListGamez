/*

*/
const contactState = {
        parent: 'layout',
        url: '/contact',
        resolve: null,
        onEnter: null,
        component: 'contact',
        onExit: null,
};
/*

*/
app.component('contact',{
    bindings: null,
    controller: function($http, $state, $filter) {
        /**
         * When component is loaded.
         */
        this.$onInit = () => {
            /**
             * Variable with all form data :
             * [name, type, message, email]
             */
            this.values = {};
            /**
             * 
             */
            this.sendedInstance = false;            
            this.submit = contactSubmit(this, $http, $state);
        };
    },
    /**
     * Values from template
     * form
     * values.name
     * values.type
     * values.message
     * values.email 
     */
    templateUrl: 'app/views/contact/contact.html'
});
/**
 * 
 * @param {*} honeypot 
 */
function validateHuman(honeypot) {
    if (honeypot) {
        console.log("Robot Detected!");
        return true;
    } else {
        console.log("Welcome Human!");
    }
};
/**
 * 
 * @param {*} this 
 * @param {*}  
 * @param {*}  
 */
function contactSubmit(scope, $http, $state) {
    return () => {
        if (scope.form.$valid && !validateHuman(scope.honeypot)){
            if (!scope.sendedInstance){
                scope.sendedInstance = true;
                $http({
                    method : "POST",
                    url : "",
                    header : {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    params: scope.values
                }).then(() => {
                    scope.sendedInstance = false;
                    swal({
                        type: "success",
                        title: "The email has been sent successfully.",
                        text: "Redirect to main menu.",
                        timer: 5000,
                        showConfirmButton: false
                    }, () => {
                        swal.close();
                        $state.go('homepage');
                    });
                }).catch(() => {
                    scope.sendedInstance = false;
                    swal({
                        type: "error",
                        title: "The email hasn't been sent.",
                        timer: 5000,
                        showConfirmButton: false
                    })
                });
            }                    
        }
    }    
};