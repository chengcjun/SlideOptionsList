const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/app.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // 将 JS 字符串生成为 style 节点
          },
          {
            loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
          },
          {
            loader: "sass-loader" // 将 Sass 编译成 CSS
          }
        ]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      hash: true,
      template: './public/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(), // 热更新插件
    new webpack.NamedModulesPlugin()
  ],
  devtool: 'inline-source-map', // map文件追踪错误提示
  devServer: {                  // 启动本地开发的node服务器环境（webpack-dev-server）
    port: 4096,                 // 端口
    contentBase: './dist',      // 开发环境的服务目录
    historyApiFallback: true,
    host: '192.168.254.10',
    inline: true,
    hot: true,
    open: true,
  },
};
