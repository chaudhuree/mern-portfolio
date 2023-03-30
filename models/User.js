const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please provide name'],
    maxlength: 50,
    minlength: 3,
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minlength: 6,
  }
}, { timestamps: true, versionKey: false })

module.exports = mongoose.model('User', userSchema)
