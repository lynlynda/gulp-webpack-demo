'use strict';
import indexModel from '../models/indexModel';
const indexController = {
  index() {
    return async(ctx, next) => {
      ctx.body = await ctx.render('index', {
        title: '学习系统'
      });
    }

  },
  getData(ctx){
    return async(ctx, next) => {

      ctx.body = await indexModel.data(ctx.query.num);
      console.log(ctx.query.num+'-------')
    }
  }
};
export
default indexController;