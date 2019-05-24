const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()

app.use(helmet())
app.use(bodyParser.json())
app.use(morgan('combined'))
app.use(require('./routes'))

app.listen('3000', (req, res) => {
  console.log('Server running on 3000')
})
