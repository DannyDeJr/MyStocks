import express from 'express'
import { PORT } from './config.js'


const app = express ()   

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
app.get('/', (req, res) => {
    res.send('GOOD MORNING DANIEL')
})
app.get('/customer', (req, res) => {
    res.send('GOOD MORNING DANIEL')
})
    
// console.log('Hello World')