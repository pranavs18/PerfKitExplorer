/**
 * @copyright Copyright 2014 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @fileoverview AlertLogDirective encapsulates HTML, style and behavior
 *     for a list of alert items.
 * @author joemu@google.com (Joe Allan Muharsky)
 */

goog.provide('p3rf.perfkit.explorer.components.alert.AlertLogDirective');

goog.require('p3rf.perfkit.explorer.components.error.ErrorService');


goog.scope(function() {
  var explorer = p3rf.perfkit.explorer;


  /**
   * See module docstring for more information about purpose and usage.
   *
   * @return {Object} Directive definition object.
   */
  explorer.components.alert.AlertLogDirective = function() {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      templateUrl: '/static/components/alert/alert-log-directive.html',
      controller: function($scope, errorService) {
        $scope.errorService = errorService;
      }
    };
  };

});  // goog.scope
