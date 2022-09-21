import express from 'express'

const app = express()

app.get('/ads', (request, response) => {
    return response.json([
        { id: 1, name: 'Sett'},
        { id: 2, name: 'ez'},
        { id: 3, name: 'jayce'},
        { id: 4, name: 'Fiora'},
    ])
})

app.listen(3333)