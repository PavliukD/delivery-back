const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const boolParser = require('express-query-boolean')
require('dotenv').config()
const { HttpCode } = require('./helper/constants')
const bodyParser = require('body-parser')

const app = express()

const ordersRouter = require('./routes/ordersRouter')
const productsRouter = require('./routes/productsRouter')


const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'


app.use(
    cors({
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      preflightContinue: false,
      optionsSuccessStatus: HttpCode.NO_CONTENT,
    }),
  )
  app.use(boolParser())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  
app.use('/api/orders', ordersRouter)
app.use('/api/products', productsRouter)


  app.use((req, res) => {
    res.status(HttpCode.NOT_FOUND).json({ message: 'Not found' })
  })

  app.use((err, req, res, next) => {
    const status = err.status || HttpCode.SERVER_ERROR
    res.status(status).json({
      status: status === 500 ? 'fail' : 'error',
      code: status,
      message: err.message,
    })
  })

  module.exports = app