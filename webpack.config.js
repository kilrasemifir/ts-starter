const NodemonPlugin = require('nodemon-webpack-plugin')
const path = require('path')
module.exports = {
    entry: './src/index.ts',
    mode:'none',
    watch:true,
    target: "node",
    output: {
        filename: 'main.js',
        libraryTarget: "umd",
        path: path.resolve('./dist')
    },
    module:{
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    plugins: [
        new NodemonPlugin({
            ignore:['node_modules/*'],
            ext:'.ts'
        })
    ]
}