/*

 */
app.directive('gameCard', function() {
  return {
    restrict: 'E',
    transclude: false,
    replace: true,
    scope: {
      ngData: '='
    },
    templateUrl: 'app/views/shared/directives/gameCard.html'
  };
});