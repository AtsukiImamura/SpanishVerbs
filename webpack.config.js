const VueLoaderplugin = require('vue-loader/lib/plugin');//vue-loader/lib/plugin
const path = require('path')

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