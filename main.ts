import Application from './app.ts'

Deno.serve({ port: 4000 }, Application.fetch)
