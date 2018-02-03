var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry:  './web_client/app.js',
    output:  {
        path: __dirname + '/js',
        filename: 'main.js'
    },
    resolve: {
        modules: [
            'node_modules'
        ]
   },
   module: {
    loaders: [{
      test: /\.js$/,
      loaders: 'babel-loader',
      query: { presets:['react'] }
  	}]
   }
}
