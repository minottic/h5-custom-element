const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'h5web.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    static: './public',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /@h5web\/app\/dist\/styles\.css$/,
        use: 'raw-loader',
      },
      {
        test: /\.css$/,
        exclude: /@h5web\/app\/dist\/styles\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  mode: 'development',
};
