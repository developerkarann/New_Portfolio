require('dotenv').config();
const express = require('express')
const cors = require('cors')
const app = express()
const connectDatabase = require('./database/database')
const contactRouter = require('./routes/contactRoute')
const port = process.env.PORT || 5000


connectDatabase()

app.use(cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

app.use(express.json())

app.use('/api', contactRouter)

app.get('/', (req, res) => {
    res.send('Server Is Running')
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
