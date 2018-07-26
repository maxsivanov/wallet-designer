const { resolve } = require('path');
module.exports = {
    entry: './components/index.js',
    output: {
        path: resolve(__dirname, 'lib'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    resolve: { extensions: ['.jsx', '.js'] },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'env']
                    }
                }
            },
            {
                test: /\.less/,
                loaders: ["style-loader", "css-loader", "less-loader"],
            }
        ]
    },
    externals: {
        react: {commonjs2: "react"},
    }
};
