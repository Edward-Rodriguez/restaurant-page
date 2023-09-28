const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    // This tells webpack-dev-server to serve the files from the dist directory on localhost:8080
    static: './dist',
  },
  // plugins: [new htmlWebpackPlugin({ template: './dist/index.html' })],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  // optimization.runtimeChunk: 'single' is needed only if we have more than one entrypoint on a single HTML page.
  // optimization: {
  //   runtimeChunk: 'single',
  // },
};
