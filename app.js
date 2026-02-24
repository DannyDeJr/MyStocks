import express from 'express'
import { PORT } from './config.js'
import { getTransactions } from './transactios.js'


const app = express ()   

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
app.get('/', (req, res) => {
    res.send('GOOD MORNING DANIEL')
})
app.get('/customer', (req, res) => {
    res.send('GOOD MORNING DANIEL')
    getCustomer(req, res)
})
app.get('/transactions/:custID', (req, res) => {
    const cID = req.params.custID
    getTransactions(res, cID)
})
    
// console.log('Hello World')