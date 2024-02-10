const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


const db = process.env.MONGODB

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connection.on('connected', () => {
    console.log('Mongoose default connection open to ' + db);
})

mongoose.connection.on('error', (err) => {
    console.log('Mongoose default connection error: ' + err);
})

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection disconnected');
})

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    })
})