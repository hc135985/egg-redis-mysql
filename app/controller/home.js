'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    console.time('index-time');
    const { ctx } = this;
    let userList = await ctx.service.home.get('userList');
    if (!userList) {
      userList = await ctx.service.home.userList();
      await ctx.service.home.set('userList', userList);
    }
    ctx.body = {
      status: 1,
      message: '请求成功',
      data: userList,
    };
    console.timeEnd('index-time');
  }
}

module.exports = HomeController;
