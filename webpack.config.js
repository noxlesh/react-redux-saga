const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const rules = [
  { test: /\.js$/, exclude: /node_modules/, use: { loader: "babel-loader" } },
  { test: /\.css$/, use: ["style-loader", "css-loader"] }
];

module.exports = {
  entry: {
    app: path.join(__dirname, "/src/index.js")
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "script.js"
  },
  module: {
    rules
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "/src/index.html")
    })
  ]
};
