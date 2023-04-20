const path = require("path");
const CopyFilePlugin = require("copy-webpack-plugin");
const WriteFilePlugin = require("write-file-webpack-plugin");

module.exports = (env, argv) => {
  return {
    mode: "production",
    entry: {
      index: path.join(__dirname, "src", "index.ts"),
    },

    output: {
      path: path.join(__dirname, "www"),
      filename: "pixijs-slots-sample.js",
      library: "pixijs-slots-sample",
      libraryTarget: "umd",
    },
    plugins: [
      new CopyFilePlugin({
        patterns: [
          {from: path.join(__dirname, "src", "index.html"), to:path.join(__dirname, "www", "index.html")},
          {from: path.join(__dirname, "src", "assets"), to:path.join(__dirname, "www", "assets")},
        ]
      }
      ),
      new WriteFilePlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".js", ".png"],
    },
    devServer: {
      static: {
        directory: path.join(__dirname, "www"),
      },
      port: 8080,
    },
  };
};
