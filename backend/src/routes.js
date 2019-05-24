const route = require('express').Router()

const questionController = require('./controllers/questionController')

route.get('/', questionController.index)

route.get('/exams', (req, res) => {
  res.send('SHOWING ALL OPEN EXAMS')
})

route.get('/exams/:id', (req, res) => {
  res.send('EXAM ID EXAMPLE')
})

route.post('/add-exam', (req, res) => {
  res.send('Added an exam')
})

route.post('/edit-exam/:id', (req, res) => {
  res.send('Editting exam')
})

module.exports = route
