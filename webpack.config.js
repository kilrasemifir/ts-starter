const NodemonPlugin = require('nodemon-webpack-plugin')
const path = require('path')
module.exports = {
    entry: './src/index.js',
    'mode':'none',
    watch:true,
    output: {
        filename: 'main.js',
        path: path.resolve('./dist')
    },
    module:{
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new NodemonPlugin({
            ignore:['node_modules/*'],
            ext:'js'
        })
    ]
}