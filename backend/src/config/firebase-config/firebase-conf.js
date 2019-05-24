const admin = require('firebase-admin')
const serviceAccount = require('./lyncas-nodejsteste-firebase-adminsdk-8jyjb-bfb843a5c1.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://lyncas-nodejsteste.firebaseio.com'
})

const db = admin.firestore()

module.exports = db
