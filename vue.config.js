module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views'
            }
        }
    }
}

// module.exports = { 
// 	devServer: { port: 8080, disableHostCheck: true, }, 
// 	css: { 
// 		loaderOptions: { 
// 			postcss: { 
// 				plugins: [ require("postcss-px-to-viewport")({ unitToConvert: "px", viewportWidth: 750, unitPrecision: 3, propList: [ "*" ], viewportUnit: "vw", fontViewportUnit: "vw", selectorBlackList: [], minPixelValue: 1, mediaQuery: false, replace: true, exclude: /(\/|\\)(node_modules)(\/|\\)/, }) ]
// 				 } } } }