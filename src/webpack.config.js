const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties'
                        ]
                    }
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.(jpg|JPG|jpeg|png|gif|mp3|svg|ttf|woff2|woff|eot)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // limit: 8000, // Convert images < 8kb to base64 strings
                            name: 'images/[hash]-[name].[ext]'
                        }
                    }
                ]
            },
            // fixes https://github.com/graphql/graphql-js/issues/1272
            {
                test: /\.mjs$/,
                include: /node_modules/,
                type: 'javascript/auto'
            }
        ]
    },
    output: {
        publicPath: '/',
        globalObject: 'this',
        path: '/static/'
    },
    // Server Configuration options
    devServer: {
        host: '0.0.0.0',
        port: 3000,
        disableHostCheck: true,
        historyApiFallback: true
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'react-host',
            remotes: {},
            shared: {
                ...deps
            }
        }),
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
            hash: true,
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
                FORCE_DOMAIN: JSON.stringify(process.env.FORCE_DOMAIN || undefined)
            }
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.mjs']
    },
};
