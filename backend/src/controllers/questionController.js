const questionModel = require('../models/questionModel')

module.exports = {
  async index (req, res) {
    const questions = await questionModel.doc('rAwnwAUANi1VujWUVLza')._path

    const {
      segments: [question]
    } = await questions

    return res.json(question)
  }
}
