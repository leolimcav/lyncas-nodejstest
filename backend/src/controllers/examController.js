const examModel = require('../models/examModel')

module.exports = {
  async index (req, res) {
    const exams = await examModel.getExams()

    return res.send(exams)
  },

  async store (req, res) {
    const newExam = await req.body
    examModel.createExam(newExam)
    return res.send(newExam)
  },

  async update (req, res) {
    console.log('UPDATE')
  }
}
