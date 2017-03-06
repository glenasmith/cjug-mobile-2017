module.exports = {
    staticFileGlobs: [
        'dist/**.html',
        'dist/**.js',
        'dist/**.css',
        'dist/assets/images/*',
        'dist/assets/icons/*'
    ],
    root: 'dist',
    stripPrefix: 'dist/',
    navigateFallback: '/index.html',
    runtimeCaching: [{
        urlPattern: /^https:\/\/example\.com\/api/,
        handler: 'networkFirst'
    }, {
        urlPattern: /\/articles\//,
        handler: 'fastest',
        options: {
            cache: {
                maxEntries: 10,
                name: 'articles-cache'
            }
        }
    }]
};
