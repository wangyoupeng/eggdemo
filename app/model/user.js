module.exports = (app) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    name: String,
  })

  // 映射到 egg-mongo db 库的users 表中 不区分大小写
  return mongoose.model('Users', UserSchema)

}

// ******************************** 使用示例 start **************************************

// const User = app.model.User;

// // 示例：在 Controller 中查询数据
// async index() {
//   const users = await User.find();
//   this.ctx.body = users;
// }

// // 示例：在 Service 中创建数据
// async createUser(newUser) {
//   const user = new User(newUser);
//   await user.save();
//   return user;
// }

// ******************************** 使用示例 end **************************************
