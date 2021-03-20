/**
 * Ce fichier permet la configuration de webpack pour le developpement de votre application.
 * En executant le script "npm run start", webpack executera votre code avec un daemon.
 */
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const NodemonPlugin = require('nodemon-webpack-plugin')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    watch:true,
    devServer: {
      contentBase: './dist',
    },
    plugins: [
        new NodemonPlugin({
            ignore:['node_modules/*'],
            ext:'.ts'
        })
    ]
});