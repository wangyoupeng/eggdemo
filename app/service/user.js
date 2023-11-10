const Service = require('egg').Service;

class UserService extends Service {
  constructor(ctx) {
    super(ctx);
    this.somekey = 'some value'
  }

  async list() {
    throw new Error('this is a test error ')
    // return [
    //   { id: 111, name: 'www' },
    //   { id: 222, name: 'yyy' },
    //   { id: 333, name: 'yyy' },
    // ]
  }
}

module.exports = UserService;
