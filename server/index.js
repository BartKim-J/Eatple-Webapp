/* eslint-disable global-require */
const Koa = require('koa');
const serve = require('koa-static');
const path = require('path');

const app = new Koa();

if (typeof window !== 'undefined') {
  const render = require('./render');

  app.use((ctx, next) => {
    if (ctx.path === '/') return render(ctx);
    return next();
  });

  app.use(render);
}

app.use(serve(path.resolve(__dirname, '../build/')));

app.listen(3001);
