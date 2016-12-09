// Const
const webpack = require('webpack');

// Exporting
module.exports = {
    entry: './index.js',
    output: {
        filename: 'expand.js',
        path: './dist'
    },
    node: {
        Buffer: false
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}, output: {comments: false}})
    ]
};
