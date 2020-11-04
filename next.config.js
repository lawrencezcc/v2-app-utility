const withSass = require('@zeit/next-sass');
const withLess = require('@zeit/next-less');

module.exports = withSass(
  withLess({
    // pageExtensions: ['jsx', 'js'],
    pageExtensions: ['js'],
    lessLoaderOptions: {
      modifyVars: {
        'layout-header-background': '#fff',
      },
      javascriptEnabled: true,
    },
  })
);
