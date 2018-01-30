exports.config = {
  bundles: [
    { components: ['my-app', 'app-home'] },
    { components: ['app-project', 'app-new-task', 'app-scope-task', 'app-votes-counted', 'app-results'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
