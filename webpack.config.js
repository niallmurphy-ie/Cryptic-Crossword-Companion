const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, "./src"),
    historyApiFallback: true,
  },
  entry: {
    popup: path.resolve(__dirname, "./src/index-popup.js"),
    foreground: path.resolve(__dirname, "./src/index-foreground.js"),
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    // publicPath: '/dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                {
                  plugins: ["@babel/plugin-proposal-class-properties"],
                },
              ],
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "popup.html",
      template: "src/public/html/popup.html",
      chunks: ["popup"],
    }),
    new HtmlWebpackPlugin({
      filename: "foreground.html",
      template: "src/public/html/foreground.html",
      chunks: ["foreground"],
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/public/manifest.json", to: "[name].[ext]" },
        { from: "src/public/background.js", to: "[name].[ext]" },
        { from: "src/inject_script.js", to: "[name].[ext]" },
        { from: "src/public/*.png", to: "[name].[ext]" },
        { from: "src/styles/*.css", to: "[name].[ext]" },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
};
