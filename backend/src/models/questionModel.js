const db = require('../config/firebase-config/firebase-conf')

const questionModel = db.collection('question')

module.exports = questionModel
