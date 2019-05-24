const admin = require('firebase-admin')
const serviceAccount = require('./lyncas-nodejsteste-firebase-adminsdk-8jyjb-e006b0928a.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://lyncas-nodejsteste.firebaseio.com'
})

module.exports = admin
