/**
 * @module
 * @description Directive responsible for forcing focus on an element
 */

export default ['$timeout', ($timeout)=> {
  return {
    restrict: 'A',
    link($scope, $element) {
      $timeout(()=> { $element[0].focus(); });
    }
  };
}];