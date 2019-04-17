const { AngularCompilerPlugin } = require('@angular-devkit/build-angular/node_modules/@ngtools/webpack');

module.exports = function () {
  return {
    entry: './src/main.ts',
    output: {
      path: __dirname + '/dist',
      filename: 'app.js'
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    module: {
      rules: [
        {test: /\.ts$/, loader: '@angular-devkit/build-angular/node_modules/@ngtools/webpack'},
        { test: /\.scss$/, loader: 'raw-loader' },
        { test: /\.html$/, loader: 'raw-loader' },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
          include: [resolve('./src/styles.css')]
        },
        // {
        //   test: /\.svg$/,
        //   loader: 'file-loader'
        // }
        {
          test: /\.svg$/,
          use: {
            loader: 'url-loader',
            options: {
              name: `[name].[ext]`,
              limit: 100000
            }
          }
        }
      ]
    },
    plugins: [
      new AngularCompilerPlugin({
        tsConfigPath: './tsconfig.aot.json',
        entryModule: './src/app/app.module#AppModule',
        sourceMap: true
      })
    ]
  };
}
