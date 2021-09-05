import express from 'express'

import { Route } from './routes'

const server = express()

const PORT = 3000

server.get(Route.Home, (request, response) => {
    response.send('Hello world!')
})

server.get(Route.Api, (request, response) => {
    response.send('Hello world from api!')
})

server.listen(PORT, () => console.log('Server successfully started on port ' + PORT))