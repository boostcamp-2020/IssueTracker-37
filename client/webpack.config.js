const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
  entry: {
    app: ['babel-polyfill', './src/index.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(`${__dirname}/build`),
  },
  resolve: {
    alias: {
      '@utils': path.join(__dirname, 'src/utils'),
      '@lib': path.join(__dirname, 'src/lib'),
      '@pages': path.join(__dirname, 'src/pages'),
      '@atoms': path.join(__dirname, 'src/components/atoms'),
      '@molecules': path.join(__dirname, 'src/components/molecules'),
      '@organisms': path.join(__dirname, 'src/components/organisms'),
      '@hoc': path.join(__dirname, 'src/hoc'),
      '@hooks': path.join(__dirname, 'src/hooks'),
      '@img': path.join(__dirname, '/public/img'),
      '@components': path.join(__dirname, 'src/components'),
    },
  },
  mode,
  devServer: {
    contentBase: path.resolve('./build'),
    index: 'index.html',
    historyApiFallback: true,
    port: 8080,
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules',
        use: ['babel-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            publicPath: './build/',
            name: '[name].[ext]?[hash]',
            limit: 10000, // 5kb 미만 파일만 data url로 처리
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      inject: false,
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new CleanWebpackPlugin(),
  ],
};
