var koa = require('koa');
var route = require('../index.js');
var app = koa();
var path = './example/controller';

app.use(function *(next) {
    yield next;
    console.log(this.response.body);
})

app.use(route(path));

app.listen(3000, function() {
  console.log('-----------------------------');
  console.log('server http://127.0.0.1:3000');
  console.log('-----------------------------\n');
});
