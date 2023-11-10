module.exports = (app) => {
  // 在中间件最前面统计请求时间
  app.config.coreMiddleware.unshift('logtime')
  // 加载监听器
  app.loader.loadToApp('./app/listener');
}
