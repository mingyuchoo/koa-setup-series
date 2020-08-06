const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
  console.log(ctx.url);
  next();
});
app.use(async (ctx) => {
  ctx.body = 'Hello World';
});

app.listen(3000, () => {
  console.log('Listening to port 3000');
});
