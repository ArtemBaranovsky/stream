const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: "./resources/js/app.js", // string | object | array
    mode: 'development',
    // runtimeCompiler: true,
    output: {
        filename: 'js/app.js',
        path: path.resolve(__dirname, 'public'),
    },
        // resolve: {
        //     alias: {
        //         'vue$': 'vue/public/js/vue.esm.js' // 'vue/dist/vue.common.js' для webpack 1
        //     }
        // },
    resolve: {
        extensions: ['*', '.js', '.vue', '.json'],
        // alias: { 'vue$': 'view/vue.esm.js' }
        alias: { 'vue$': 'vue/dist/vue.esm.js' }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader'
                }
            },
            // this will apply to both plain `.js` files
            // AND `<script>` blocks in `.vue` files
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            // this will apply to both plain `.css` files
            // AND `<style>` blocks in `.vue` files
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin()
    ]
};

/*

var path = require('path');
var webpack = require('webpack');
var Mix = require('laravel-mix').config;
var plugins = require('laravel-mix').plugins;


// Mix.initialize();
Mix;



// module.exports.context = Mix.paths.root();



// module.exports.entry = Mix.entry();
module.exports.entry = "./resources/js/app.js";
module.exports.mode = 'development';
module.exports.output = {
    filename: './public/js/app.js',
}

// if (Mix.js.vendor) {
//     module.exports.entry.vendor = Mix.js.vendor;
// }




// module.exports.output = Mix.output();




module.exports.module = {
    rules: [
        {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    js: 'babel-loader'/!* + Mix.babelConfig()*!/,
                    scss: 'vue-style-loader!css-loader!sass-loader',
                    sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                },

                postcss: [
                    require('autoprefixer')
                ]
            }
        },

        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader'/!* + Mix.babelConfig()*!/
        },

        {
            test: /\.(png|jpg|gif)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]?[hash]'
            }
        },

        {
            test: /\.(woff2?|ttf|eot|svg)$/,
            loader: 'file-loader',
            options: {
                name: '/fonts/[name].[ext]?[hash]'
            }
        }
    ],
};


if (Mix.sass) {
    module.exports.module.rules.push({
        test: /\.s[ac]ss$/,
        loader: plugins.ExtractTextPlugin.extract({
            fallbackLoader: 'style-loader',
            loader: [
                'css-loader', 'postcss-loader',
                'resolve-url-loader', 'sass-loader?sourceMap'
            ]
        })
    });
}


if (Mix.less) {
    module.exports.module.rules.push({
        test: /\.less$/,
        loader: plugins.ExtractTextPlugin.extract({
            fallbackLoader: 'style-loader',
            loader: ['css-loader', 'postcss-loader', 'less-loader']
        })
    });
}



module.exports.resolve = {
    extensions: ['*', '.js', '.jsx', '.vue'],

    alias: {
        'vue$': 'vue/dist/vue.esm.js'
    }
};



module.exports.stats = {
    hash: false,
    version: false,
    timings: false,
    children: false,
    errors: false
};

module.exports.performance = { hints: false };




module.exports.devtool = Mix.sourcemaps;



module.exports.devServer = {
    historyApiFallback: true,
    noInfo: true
};



module.exports.plugins = [
    // new plugins.FriendlyErrorsWebpackPlugin(),

    new webpack.LoaderOptionsPlugin({
        minimize: Mix.inProduction,
        options: {
            postcss: [
                require('autoprefixer')
            ],
            context: __dirname,
            output: { path: './' }
        }
    }),

    function() {
        // this.plugin('done', stats => Mix.manifest.write(stats));
    },
];


/!*if (Mix.notifications) {
    module.exports.plugins.push(
        new plugins.WebpackNotifierPlugin({
            title: 'Laravel Mix',
            alwaysNotify: true,
            contentImage: 'node_modules/laravel-mix/icons/laravel.png'
        })
    );
}*!/


/!*
if (Mix.versioning.enabled) {
    Mix.versioning.record();

    module.exports.plugins.push(
        new plugins.WebpackOnBuildPlugin(() => {
            Mix.versioning.prune(Mix.publicPath);
        })
    );
}
*!/


if (Mix.combine || Mix.minify) {
    module.exports.plugins.push(
        new plugins.WebpackOnBuildPlugin(() => {
            Mix.concatenateAll().minifyAll();
        })
    );
}


if (Mix.copy) {
    Mix.copy.forEach(copy => {
        module.exports.plugins.push(
            new plugins.CopyWebpackPlugin([copy])
        );
    });
}


// if (Mix.js.vendor) {
//     module.exports.plugins.push(
//         new webpack.optimize.CommonsChunkPlugin({
//             names: ['vendor', 'manifest']
//         })
//     );
// }


if (Mix.cssPreprocessor) {
    module.exports.plugins.push(
        new plugins.ExtractTextPlugin({
            filename: Mix.cssOutput()
        })
    );
}


if (Mix.inProduction) {
    module.exports.plugins = module.exports.plugins.concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),

        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        })
    ]);
}

// Mix.finalize(module.exports);
*/
