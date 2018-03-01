const HtmlPlugin = require('html-webpack-plugin');
module.exports = {
    // Tell webpack to start bundling our app at src/index.js
    entry: './src/index.js',
    // Output our app to the dist/ directory
    output: {
        filename: 'bundle.js',
        path: __dirname + '/build'
    },
    // Emit source maps so we can debug our code in the browser
    devtool: 'source-map',
    // Tell webpack to run our source code through Babel
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    // Since Webpack only understands JavaScript, we need to
    // add a plugin to tell it how to handle html files.
    plugins: [
        // Configure HtmlPlugin to use own index.html file
        // as a template.
        // Check out https://github.com/jantimon/html-webpack-plugin
        // for the full list of options.
        new HtmlPlugin({
            template: 'public/index.html'
        })
    ]
};
