import { Hono } from '@hono/hono'

const app = new Hono()

app.get('/quest', async (c) => {
  const name = c.req.query('name')
  const msg = `Choisis ta quête ${name ?? 'aventurier'}`
  return c.json({
    msg,
    quest: [
      'aller cueillir des baies',
      'tuer des 5 kobolts',
      'voler la bourse à un marchand',
    ],
  })
})

app.get('/:name?', async (c) => {
  const name = c.req.param('name') ?? 'aventurier'
  return c.text(`Bien le bonjour ${name}`)
})

export default app
