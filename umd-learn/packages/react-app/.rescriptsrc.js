const path=require('path');
const name = "ReactComponent";
module.exports = {
    webpack: config => {
        config.output.library = `${name}`;
        config.output.libraryTarget = 'umd';
        config.output.jsonpFunction = `webpackJsonp_${name}`;
        config.output.globalObject = 'window';
        config.resolve.alias = Object.assign(config.resolve.alias, {
            '@': path.resolve(__dirname, './src'),
        });
        return config;
    },
    devServer: _ => {
        const config = _;
        config.headers = {
            'Access-Control-Allow-Origin': '*',
        };
        config.historyApiFallback = true;
        config.hot = false;
        config.watchContentBase = false;
        config.liveReload = false;
        config.port = 8082;
        return config;
    },
};
