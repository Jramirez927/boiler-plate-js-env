// This file isn't transpiled , so must use CommonJS and ES5

// register babel to transpile before our test run.
require('babel-register')();
// disable webpack feattures that mocha doesn't understand
require.extensions['.css'] = function () {};
