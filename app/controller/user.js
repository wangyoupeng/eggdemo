'use strict';

const { Controller } = require('egg')

class itController extends Controller {
  async list() {
    const { ctx } = this
    let userList = await this.service.user.list()
    ctx.body = {
      code: 200,
      message: 'ok',
      data: {
        list: userList
      }
    }
  }
}

module.exports = itController
