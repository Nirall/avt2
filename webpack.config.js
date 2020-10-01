const path = require("path");
const htmlPlugin = require("html-webpack-plugin");
const cssExtract = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    contacts: path.resolve(__dirname, "src/pages/ContactsPage/ContactsPage.js"),
    home: path.resolve(__dirname, "src/pages/HomePage/HomePage.js"),
    forging: path.resolve(__dirname, "src/pages/HotDieForgingPage/HotDieForgingPage.js"),
    processing: path.resolve(__dirname, "src/pages/MechanicalProcessingPage/MechanicalProcessingPage.js"),
    privacy: path.resolve(__dirname, "src/pages/PrivacyPage/PrivacyPage.js"),
    samples: path.resolve(__dirname, "src/pages/SamplesPage/SamplesPage.js"),
    index: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].js"
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: {

        },
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
        },
        styles: {
          name: 'style',
          test: /\.s?css$/,
          chunks: 'all',
          enforce: true,
        },
      },
      name: true,
      chunks: 'all'
    }
  },
  //devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
  },
  plugins: [
    new CleanWebpackPlugin,
    new htmlPlugin({
      template: "src/pages/ContactsPage/contacts.html",
      inject: false,
      filename: "contacts.html",
    }),
    new htmlPlugin({
      template: "src/pages/HomePage/home.html",
      inject: false,
      filename: "index.html",
    }),
    new htmlPlugin({
      template: "src/pages/HotDieForgingPage/forging.html",
      inject: false,
      filename: "forging.html",
    }),
    new htmlPlugin({
      template: "src/pages/MechanicalProcessingPage/processing.html",
      inject: false,
      filename: "processing.html",
    }),
    new htmlPlugin({
      template: "src/pages/PrivacyPage/privacy.html",
      inject: false,
      filename: "privacy.html",
    }),
    new htmlPlugin({
      template: "src/pages/SamplesPage/samples.html",
      inject: false,
      filename: "samples.html",
    }),
    new cssExtract({
      ignoreOrder: true,
      filename: "[name].css",
      chunkFilename: "[name].css",
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
                //sourceMap: true,
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