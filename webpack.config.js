module.exports = {
    entry: './src/main.ts',
    output: {
        filename: 'public/scripts/[name].js'
    },
    module: {
        loaders: [{
            test: /\.ts$/,
            loader: 'ts-loader'
        }, {
            test: /\.scss$/,
            loader: [
                'style-loader',
                'css-loader',
                'sass-loader',
            ]
        }]
    }
};