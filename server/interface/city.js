import Router from 'koa-router'

const router = new Router({
  prefix: '/city'
})

router.get('/list', async ctx => {
  ctx.body = {
    list: ['西安', '延安']
  }
})

export default router
