var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './');
var APP_DIR = path.resolve(__dirname, './');

const config = {
   entry: './main.js',

   output: {
      path:'/',
      filename: 'index.js',
   },

   devServer: {
      inline: true,
      port: 8080
   },

   resolve: {
       mainFields: ["browser",  "main"]
   },

   module: {
     loaders: [

       {
         test: /plugin\.css$/,
         loaders: [
           'style', 'css',
         ],
       },

       {
         test: /\.(js|jsx)$/,
         include: APP_DIR,
         loader: 'babel-loader',
         query: {
           presets: ['react']
         }
       },

       {
         test: /\.json$/,
         loader: "json-loader"
     }
     ]
   }
}

module.exports = config;
