/*

 */
app.directive('cardOff', function() {
  return {
    restrict: 'E',
    transclude: true,
    replace: true,
    scope: {
      title: '@',
      icon: '@'
    },
    templateUrl: 'app/views/shared/cardOff.html'
  };
});