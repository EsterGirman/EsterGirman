const express = require('express')
const cors = require('cors')

const port = 8000
const app = express() 

app.use(express.json())
app.use(cors())

// connect db
require('./config/configDb')

// Routers
const usersRouter = require('./Routers/userRouter')
const vaccinationRouter = require('./Routers/vaccinationsRouter')

app.use('/users', usersRouter)
app.use('/vaccinations', vaccinationRouter)


app.listen(port, () => {
    console.log(`server is listening port ${port}`);
})

