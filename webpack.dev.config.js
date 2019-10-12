const path = require("path");
const htmlwebpackplugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "./src/index.js"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: ''
  },
  mode:'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    index:'index.html',
    port: 9000
  },
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            use: ["babel-loader"],
            exclude: /node_modules/
        },
        {
          test: /\.css$/,
          loader: ['style-loader','css-loader']
        },
        {
            test: /\.scss$/,
            use: [
                'style-loader', 'css-loader', 'sass-loader'
            ]
        },
        ]
  },
  plugins: [
    new htmlwebpackplugin({
      template: path.join(__dirname, "/src/index.html"),
      filename: "index.html",
      inject: "body"
    })
  ]
};