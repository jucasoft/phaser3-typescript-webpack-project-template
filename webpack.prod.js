const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    performance: {
        maxEntrypointSize: 9000000,
        maxAssetSize: 9000000
    },
});

