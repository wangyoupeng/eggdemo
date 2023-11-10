module.exports = () => {
  return async function errorHandler(ctx, next) {
    try {
      await next();
    } catch (err) {
      console.error('http api error::: ', err)
      // 设置状态码
      ctx.status = err.status || 500;
      // 获取错误信息，包括堆栈信息
      const message = err.message || 'Internal Server Error';
      ctx.body = {
        code: 500,
        message
      }

      // 判断是否是生产环境并对客户端来进行判断输出
      //   if (ctx.app.config.env === 'prod') {
      //     ctx.body = { error: message };
      //   } else {
      //     ctx.body = { error: message, stack: err.stack };
      //   }
    }
  };
};
