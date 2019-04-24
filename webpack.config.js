const VueLoaderplugin = require('vue-loader/lib/plugin');//vue-loader/lib/plugin
const path = require('path')
const enabledSourceMap = true

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dest'),
        filename: 'bundle.js'
    },
    devServer: {
        // webpackの扱わないファイル(HTMLや画像など)が入っているディレクトリ
        contentBase: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.vue/,
                loader: 'vue-loader'
            },
            {
                test: /\.js/,
                loader: 'babel-loader'
            },
            {
                test: /\.css/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss/, // 対象となるファイルの拡張子
                use: [
                    // linkタグに出力する機能
                    "style-loader",
                    // CSSをバンドルするための機能
                    {
                        loader: "css-loader",
                        options: {
                        // オプションでCSS内のurl()メソッドの取り込みを禁止する
                        url: false,
                        // ソースマップの利用有無
                        sourceMap: enabledSourceMap,
            
                        // 0 => no loaders (default);
                        // 1 => postcss-loader;
                        // 2 => postcss-loader, sass-loader
                        importLoaders: 2
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                        // ソースマップの利用有無
                        sourceMap: enabledSourceMap
                        }
                    }
                ]
            }
        ]
    },

    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm.js'
        }
    },

    plugins: [new VueLoaderplugin()],
}