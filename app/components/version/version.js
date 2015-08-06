'use strict';

angular.module('sparkleApp.version', [
  'sparkleApp.version.interpolate-filter',
  'sparkleApp.version.version-directive'
])

.value('version', '0.1');
