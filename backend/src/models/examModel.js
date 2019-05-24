const admin = require('../config/firebase-config/firebase-conf')

const db = admin.database()

const dbRef = db.ref()
const examRef = dbRef.child('exam/')

module.exports = {
  getExams () {
    const data = []
    examRef.on('value', async snap => {
      await data.push(snap.val())
    })
    return data
  },
  async createExam (exam) {
    await examRef.push(exam, () => {
      console.log('data inserida')
    })
  }
}
