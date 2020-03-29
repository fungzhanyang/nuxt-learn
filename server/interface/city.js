import Router from 'koa-router'

const router = new Router({
  prefix: '/city'
})

router.get('/list', async ctx => {
  ctx.body = ['西安', '延安']
})

export default router
