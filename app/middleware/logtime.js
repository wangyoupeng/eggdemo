module.exports = () => {
  return async function(ctx, next) {
    const startTime = Date.now()
    await next()
    console.log(Date.now() - startTime)
  }
}
