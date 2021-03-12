const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');
const path = require('path');

module.exports = {
  // Where webpack looks to start building the bundle
  // Откуда начинается сборка
  entry: [`${paths.src}/index.js`],

  // Where webpack outputs the assets and bundles
  // Куда помещаются файлы сборки
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: './',
  },

  resolve: {
    alias: {
      '@js': path.resolve(__dirname, '../src/js'),
    },
    extensions: ['.js', '.jsx'],
  },

  // Customize the webpack build process
  // Настройки
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    // Удаление/очистка директории для файлов сборки и неиспользуемых ресурсов при повтроном сборке
    new CleanWebpackPlugin(),

    // Copies files from target to destination folder
    // Копирование статических файлов
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
        },
      ],
    }),

    // Generates an HTML file from a template
    // Создание HTML-файла на основе шаблона
    new HtmlWebpackPlugin({
      title: 'BlackJack RS',
      favicon: `${paths.src}/images/favicon.ico`,
      // template file
      // шаблон
      template: `${paths.src}/template.html`,
      filename: 'index.html', // output file
    }),
  ],

  // Determine how modules within the project are treated
  // Настройка модулей
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      // JavaScript: использовать Babel для транспиляции
      { test: /\.js|jsx$/, exclude: /node_modules/, use: ['babel-loader'] },

      // Styles: Inject CSS into the head with source maps
      // Стили: встроить CSS в head с картами источников
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 1 },
          },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },

      // Images: Copy image files to build folder
      // Изображения: копировать файлы в директорию для файлов сборки
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

      // Fonts and SVGs: Inline files
      // Шрифты и SVG
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
    ],
  },
};
