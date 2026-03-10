import express from 'express'
import { PORT } from './config.js'
import { getTransactions } from './transactios.js'
import { getCustomer } from './customer.js'
import { addtoFaves, deleteFromFaves } from './faves.js'

const app = express ()
//middleware to parse JSON bodies in requests
app.use(express.json())   

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
app.get('/', (req, res) => {
    res.send('<h1>Refer to documentation for API endpoints.</h1>')
})
app.get('/customers', (req, res) => {
    getCustomer(req, res)
})
app.get('/transactions/:custID', (req, res) => {
    const cID = req.params.custID
    if (isNaN(cID)) 
        { res.status(400).json({ "error": "Customer ID must be a number" }) 
    return }
    getTransactions(res, cID)
})

app.post('/customers/add/:custID', (req, res) => {
    const cID = req.params.custID
    if (isNaN(cID)) 
        { res.status(400).json({ "error": "Customer ID must be a number" }) 
    return }
    addtoFaves(res, parseInt(cID))
    
})

app.delete('/faves/remove', (req, res) => {
    const data = req.body
    deleteFromFaves(res, data.custID)
    })