var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main-aot.ts',
  output: {
    filename: 'bundle.js',
    path: './dist'
  },
  module: {
    rules: [{
      test: /\.ts$/,
      // loader: 'ts-loader!angular2-template-loader',
      loader: 'ts-loader!angular2-template-loader',
      exclude: [/spec\.ts$/],
    }, {
      test: /\.(html|css)$/,
      loader: 'raw-loader',
      exclude: [/node_modules/],
    }]
  },
  resolve: {
    extensions: [".ts", ".js", ".html"]
  },

  plugins: [new HtmlWebpackPlugin({
    template: "./src/index.html"
  })]
};
