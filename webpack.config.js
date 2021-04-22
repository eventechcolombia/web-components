const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'source', 'main.ts'),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        include: path.resolve(__dirname, 'source'),
        exclude: [
          /node_modules/,
          /.notes/,
          /dist/,
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};