// const express = require('express')
import express from 'express'
const app = express()
const PORT = 3000

const exp = () => {

    app.get('/', (req, res) => {
        res.send('Hello World! I am Gantavya')
    })
    
    app.get('/about', (req, res) => res.send('I do fun'))
    app.get('/contact', (req, res) => res.send('Reach me at: gantavyaoo@gmail.com'))
    
    app.listen(PORT, () => console.log('Server listening at: ', PORT))
}

export default exp
