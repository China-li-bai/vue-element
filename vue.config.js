module.exports = {
    devServer: {
        proxy: {
            // localhost:8080/abc/coding/tokens => proxy => http://192.168.113.117:8080/tokens
            '/handsome': {
                target: 'http://192.168.113.117:8080',
                changeOrigin: true,
                pathRewrite: {
                    '^/handsome': '/'
                }
            }
        }
    }
}