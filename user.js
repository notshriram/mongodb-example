let mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
  FirstName: String,
  LastName: String,
  Gender: String,
  Email: String
})


module.exports = mongoose.model('User', userSchema)