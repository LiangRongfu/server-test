const Koa = require('koa');
const Router = require('koa-router');

const router = new Router();
const bodyparser = require('koa-bodyparser');

const app = new Koa();
const cors = require('koa2-cors');

app.use(cors());
app.use(bodyparser());

const info = require('./info.json');
router.get('/api/info', async ctx => {
  ctx.body = {
    code: 0,
    data: info
  }
});
app.use(router.routes()).use(router.allowedMethods());
app.listen(80);
