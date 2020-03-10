// Require packages
// const cors = require('cors')
const express = require('express')

// Create instance for express app
const app = express()

// Set up middleware
app.use(express.urlencoded({ extended: false }))
// app.use(express.json({ limit: '50mb' }))
// app.use(cors())

app.get('/', (req, res) => {
  res.status(200).send({ message: 'Welcome to the MIB: Mates in Beige'})
})

// Include the controllers
app.use('/v1/bounties', require('./routes/v1/bounties'))

// Catch all route (404: Not found)
app.get('*', (req, res) => {
  res.status(404).send({ message: 'Not Found' })
})

app.listen(process.env.PORT || 3000, console.log(`☕️ You're listening to the smooth sounds of port ${process.env.PORT || 3000} ☕️`));