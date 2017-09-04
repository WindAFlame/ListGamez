
app.component('mdlInput',{
    bindings: {
        itype: '@',
        iname: '@',
        ilabel: '@',
        irequired: '=',
        ngmodel: '='
    },
    controller: null,
    templateUrl: 'app/shared/mdlInput/mdlInput.html'
});