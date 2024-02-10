const express = require('express');
require('dotenv').config();

const bodyParser = require('body-parser');
const session = require('express-session');
var MemoryStore = require('memorystore')(session);
require('./src/connect/mongodb');
const UserService = require('./src/user/user.services');
const Stripe = require('./src/connect/stripe');
const hasPlan = require('./src/middleware/hasPlan');
const setCurrentUser = require('./src/middleware/setCurrentUser');


const app = express();

app.use(session({
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 86400000 },
    store: new MemoryStore({
        checkPeriod: 86400000
    }),
    resave: false,
    saveUninitialized: false,

}));

app.use('/webhook',bodyParser.raw({type: 'application/json'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


app.listen(8000, () => {
    console.log('Server is running on port 8000');
})


