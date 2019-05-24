const route = require('express').Router()

const examController = require('./controllers/examController')

route.get('/', (req, res) => {
  res.send('hello')
})

route.get('/exams', examController.index)

route.get('/exams/:id', (req, res) => {
  res.send('EXAM ID EXAMPLE')
})

route.post('/add-exam', examController.store)

route.post('/edit-exam/:id', (req, res) => {
  res.send('Editting exam')
})

module.exports = route
