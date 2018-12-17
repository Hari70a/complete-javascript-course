const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["babel-polyfill", "./src/js/index.js"],
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "js/bundle.js"
  },
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: "index.html", //store into
      template: "./src/index.html" //copy from
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
