/*

 */
app.directive('cardOff', function() {
  return {
    restrict: 'E',
    transclude: true,
    replace: true,
    scope: {
      cardId: '='
    },
    templateUrl: 'app/views/shared/directives/cardOff.html'
  };
});