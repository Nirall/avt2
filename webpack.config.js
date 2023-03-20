const path = require("path");
const htmlPlugin = require("html-webpack-plugin");
const cssExtract = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js"
  },
  // devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
  },
  plugins: [
    new CleanWebpackPlugin,
    new htmlPlugin({
      template: "src/index.html",
      inject: false,
      filename: "index.html",
    }),
    new cssExtract({
      filename: "style.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.s*css$/,
        use: [
            cssExtract.loader,
            "css-loader",
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              }
            },
          ]
      },
      {
        test: /(?<!favicon.*)\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[hash].[ext]",
            }
          },
        ],
      },
      {
        test: /favicon.*\.(png|xml|svg|ico)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "favicon/[name].[ext]",
            }
          },
        ],
      },
    ]
  }
};