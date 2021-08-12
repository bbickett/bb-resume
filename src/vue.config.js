const path = require('path')

const isDevBuild = process.env.NODE_ENV == 'development'


module.exports = {

    devServer: {
        public: 'localhost',
        headers: { 'Access-Control-Allow-Origin': '*' }
    },
    runtimeCompiler: true,
    configureWebpack: {
        optimization: {
            // to turn off code splitting: https://webpack.js.org/configuration/optimization/#optimization-splitchunks
            splitChunks: {
                chunks: 'all',
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        name: (isDevBuild) ? 'vendors' : 'vendors.min',
                        chunks: 'all'
                    },
                }
            },
        },

    },

    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/scss/variables.scss"; @import "node_modules/bootstrap/scss/_functions.scss"; @import "node_modules/bootstrap/scss/_mixins.scss"; `
            }
        }
    }
};