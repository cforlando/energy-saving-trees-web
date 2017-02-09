module.exports = {
  entry: "./app/app.js",
  output: {
    path: __dirname,
    filename: "dist/bundle.js"
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader'   },
        { loader: 'sass-loader'  }
      ]
    }],
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
