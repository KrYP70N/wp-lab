module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/dist' // dist is default build path, you can use "path" if u need custom output folder
  }
}