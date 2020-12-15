var path = require('path');

module.exports = {
    mode: 'production',
    entry: './wwwroot/js/site.js',
    output: {
        path: path.resolve(__dirname, 'wwwroot/dist'),
        filename: 'site.bundle.js'
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        }
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};
