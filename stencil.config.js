exports.config = {
  bundles: [
    { components: ['my-app', 'app-home'] },
    { components: ['app-project', 'app-new-task', 'app-scope-task'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
