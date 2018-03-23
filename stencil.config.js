const sass = require('@stencil/sass')

exports.config = {
  bundles: [
    { components: ['my-app', 'app-home'] },
    { components: ['app-project', 'app-new-task', 'app-scope-task'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ],
  plugins: [
    sass()
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
