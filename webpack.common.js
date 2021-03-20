
const path = require('path')
module.exports = {
    entry: './src/main/index.ts',
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
    
}