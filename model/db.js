const mongoose = require('mongoose')
require('dotenv').config()

const uriDb = process.env.URL_DB

const db = mongoose.connect(uriDb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    poolSize: 50,
  })

  mongoose.connection.on('connected', () => {
    console.log('Database connection successful')
  })
  mongoose.connection.on('error', err => {
    console.log(`Database error: ${err.message}`)
  })
  
mongoose.connection.on('disconnected', () => {
    console.log('Database disconnected')
  })
  
  process.on('SIGINT', async () => {
    mongoose.connect.close(() => {
      console.log('Connection to DB closed and app termination')
      process.exit(1)
    })
  })
  
  module.exports = db