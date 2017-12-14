var Koa = require('koa');
var route = require('../index.js');
var app = new Koa();
var path = './example/controller';

app.use(async (ctx, next) => {
  await next();
  console.log(ctx.response.body);
})
app.use(route(path));

app.listen(4000, function() {
  console.log('-----------------------------');
  console.log('server http://127.0.0.1:4000');
  console.log('-----------------------------\n');
});
