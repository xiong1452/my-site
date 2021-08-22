module.exports = {
    devServer: {
        proxy: {
            '/api/banner': {
                target: 'http://localhost:7001'
            },
            '/static': {
                target: 'http://localhost:7001'
            },
            'api/blog': {
                target: 'http://localhost:7001'
            },
            'api/comment': {
                target: 'http://localhost:7001'
            },
            'api/about': {
                target: 'http://localhost:7001'
            },
            'api/project': {
                target: 'http://localhost:7001'
            },
            'api/message': {
                target: 'http://localhost:7001'
            },
            'api/setting': {
                target: 'http://localhost:7001'
            }
        }
    },
    configureWebpack: require("./webpack.config.js")
}