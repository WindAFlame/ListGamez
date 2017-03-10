(function() {
        'use strict';
        var dialog = document.querySelector('#dialog-download');
        var closeButton = dialog.querySelector('button');
        var showButton = document.querySelector('#show-dialog-download');
        if (! dialog.showModal) {
            dialogPolyfill.registerDialog(dialog);
        }
        var closeClickHandler = function(event) {
            dialog.close();
        };
        var showClickHandler = function(event) {
            dialog.showModal();
        };
        showButton.addEventListener('click', showClickHandler);
        closeButton.addEventListener('click', closeClickHandler);
    }());


var dialog = document.querySelector('dialog');
var showDialogButton = document.querySelector('#show-dialog');
if (! dialog.showModal) {
    dialogPolyfill.registerDialog(dialog);
}
showDialogButton.addEventListener('click', function() {
    dialog.showModal();
});
dialog.querySelector('.close').addEventListener('click', function() {
    dialog.close();
});