const admin = require('firebase-admin');

const firebaseService = require('../rest-api-crud-nodejs-firebase-firebase-adminsdk-22mbw-d4acacfb4d.json');

admin.initializeApp({
    credential: admin.credential.cert(firebaseService)
});

const conn = admin.firestore();

module.exports = conn;