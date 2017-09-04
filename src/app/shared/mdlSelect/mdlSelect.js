
app.component('mdlSelect',{
    bindings: {
        iname: '@',
        ilabel: '@',
        ioptions: '=',
        irequired: '@',
        ngmodel: '='
    },
    controller: null,
    templateUrl: 'app/shared/mdlSelect/mdlSelect.html'
});