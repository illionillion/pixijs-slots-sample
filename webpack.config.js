const path = require("path");

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
      extensions: [".ts", ".js"],
    },
    devServer: {
      // contentBase: "www",
      static: {
        directory: path.join(__dirname, "www"),
      },
      port: 8080,
    },
  };
};
