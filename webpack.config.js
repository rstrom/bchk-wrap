module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'wrap.js',
    path: './dist',
    library: '$wrap'
  },
  externals: {
    react: 'React'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'latest', 'stage-2'],
          plugins: ['transform-flow-strip-types']
        }
      }
    ]
  }
}
