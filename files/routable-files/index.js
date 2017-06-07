/* eslint-env node */
'use strict';

const EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: '<%= dasherizedModuleName %>'<% if (hasLazyFlag) { %>,
  lazyLoading: {
    enabled: <%= isLazy %>
  }<% } %>
});
