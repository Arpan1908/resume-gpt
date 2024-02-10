const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:String,
    billingID:String,
    plan:{
        type:String,
        enum:['free','pro','premium'],
        default:'free'
    },
    endDate:{type:Date, default:null}

});

const userModel = mongoose.model('user', userSchema,'user');

module.exports = userModel;