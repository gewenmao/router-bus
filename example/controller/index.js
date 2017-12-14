module.exports = [{
  url: ['/index', '/'],
  controller: function (ctx, next) {
    ctx.body = 'This is index page'
  }
},{
  url: '/main',
  controller: function (ctx, next) {
    ctx.body = 'This is main page'
  }
}]
