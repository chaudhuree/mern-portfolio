const mongoose = require("mongoose");
const projectsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  technolgies: {
    type: Array,
    required: true,
  },
});
module.exports = mongoose.model('Projects', projectsSchema)