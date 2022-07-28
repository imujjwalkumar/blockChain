var mongoose = require('mongoose')
const conn =()=>{
    mongoose.connect('mongodb://localhost:27017/node-file-upl', {useNewUrlParser: true}).then(()=>{
    console.log('connected to db')
})
};

module.exports = conn;