/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1699583529233_5850';

  // add your middleware config here
  config.middleware = [
    'errorHandler'
  ];

  config.onerror = {
    all(err, ctx) {
      // 在此处定义针对所有响应类型的错误处理方法
      // 注意，定义了 config.all 之后，其他错误处理方法不会再生效
      console.error("Uncaught Exception err: ", err)
      ctx.body = 'error';
      ctx.status = 500;
    },
    html(err, ctx) {
      // html handler
      ctx.body = `<h3>${err.message || 'error'}</h3>`;
      ctx.status = 500;
    },
    json(err, ctx) {
      // json handler
      ctx.body = { message: err.message || 'error' };
      ctx.status = 500;
    },
    // jsonp(err, ctx) {
    //   // 一般来说，不需要特殊针对 jsonp 进行错误定义，jsonp 的错误处理会自动调用 json 错误处理，并包装成 jsonp 的响应格式
    // }

  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
