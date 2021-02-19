module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
//   configureWebpack: {
//     output: {
//       library: `MyComponent`,
//       filename:'my-component.js',
//       libraryTarget: 'umd',// 把微应用打包成 umd 库格式
//       jsonpFunction: `webpackJsonp`,
//     },
//   },
};