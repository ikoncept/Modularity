const path = require('path');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveEmptyScripts = require('webpack-remove-empty-scripts');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const { getIfUtils, removeEmpty } = require('webpack-config-utils');
const { ifProduction } = getIfUtils(process.env.NODE_ENV);

module.exports = {
    mode: ifProduction('production', 'development'),

    /**
     * Add your entry files here
     */
    entry: {
        'js/modularity-editor-modal': './source/js/modularity-editor-modal.js',
        'js/modularity': './source/js/modularity.js',
        'css/modularity': './source/sass/modularity.scss',
        'css/modularity-thickbox-edit': './source/sass/modularity-thickbox-edit.scss',

        //Admin
        'js/dynamic-acf': './source/js/admin/dynamic-acf.js',

        //Modules
        'js/mod-posts-taxonomy': './source/php/Module/Posts/assets/mod-posts-taxonomy.js',
        'js/mod-posts-load-more-button': './source/php/Module/Posts/assets/mod-posts-load-more-button.js',
        'js/table-init': './source/php/Module/Table/assets/table-init.js',
        'css/table': './source/php/Module/Table/assets/table.scss',
    },
    
    /**
     * Output settings
     */
    output: {
        filename: ifProduction('[name].[contenthash].js', '[name].js'),
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
    },
    /**
     * Define external dependencies here
     */
    externals: {
    },
    module: {
        rules: [
            /**
             * Babel
             */
            {
                test: /\.js?/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // Babel config here
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            '@babel/plugin-syntax-dynamic-import',
                            '@babel/plugin-proposal-export-default-from',
                            '@babel/plugin-proposal-class-properties'
                        ],
                    },
                },
            },

            /**
             * Styles
             */
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 3, // 0 => no loaders (default); 1 => postcss-loader; 2 => sass-loader
                    },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {},
                    },
                    {
                        loader: 'sass-loader',
                        options: {}
                    },
                    'import-glob-loader'
                ],
            },
            /**
             * Images
             */
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/action_icons/[name][ext]',
                },
            },
        ],
    },
    plugins: removeEmpty([

        /**
         * BrowserSync
         */
        typeof process.env.BROWSER_SYNC_PROXY_URL !== 'undefined' ? new BrowserSyncPlugin(
            // BrowserSync options
            {
                // browse to http://localhost:3000/ during development
                host: 'localhost',
                port: process.env.BROWSER_SYNC_PORT ? process.env.BROWSER_SYNC_PORT : 3000,
                // proxy the Webpack Dev Server endpoint
                // (which should be serving on http://localhost:3100/)
                // through BrowserSync
                proxy: process.env.BROWSER_SYNC_PROXY_URL
            },
            // plugin options
            {
                // prevent BrowserSync from reloading the page
                // and let Webpack Dev Server take care of this
                reload: false
            }
        ) : null,

        /**
         * Fix CSS entry chunks generating js file
         */
         new RemoveEmptyScripts(),

        /**
         * Clean dist folder
         */
        new CleanWebpackPlugin(),
        /**
         * Output CSS files
         */
        new MiniCssExtractPlugin({
            filename: ifProduction('[name].[contenthash:8].css', '[name].css')
        }),

        /**
         * Output manifest.json for cache busting
         */
        new WebpackManifestPlugin({
            // Filter manifest items
            filter: function (file) {
                // Don't include source maps
                if (file.path.match(/\.(map)$/)) {
                    return false;
                }
                return true;
            },
            // Custom mapping of manifest item goes here
            map: function (file) {
                // Fix incorrect key for fonts
                if (
                    file.isAsset &&
                    file.isModuleAsset &&
                    file.path.match(/\.(woff|woff2|eot|ttf|otf)$/)
                ) {
                    const pathParts = file.path.split('.');
                    const nameParts = file.name.split('.');

                    // Compare extensions
                    if (pathParts[pathParts.length - 1] !== nameParts[nameParts.length - 1]) {
                        file.name = pathParts[0].concat('.', pathParts[pathParts.length - 1]);
                    }
                }
                
                return file;
            },
        }),

        /**
         * Enable build OS notifications (when using watch command)
         */
        new WebpackNotifierPlugin({alwaysNotify: true, skipFirstNotification: true}),

        /**
         * Minimize CSS assets
         */
         ifProduction(new CssMinimizerWebpackPlugin({
            minimizerOptions: {
                preset: [
                    "default",
                    {
                        discardComments: { removeAll: true },
                    },
                ],
            },
        }))

    ]).filter(Boolean),
    devtool: 'source-map',
    stats: {children: false}
};
