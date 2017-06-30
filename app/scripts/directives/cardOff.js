app.directive('cardOff', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      title: '@',
      icon: '@'
    },
    templateUrl: 'app/views/shared/cardOff.html'
  };
});