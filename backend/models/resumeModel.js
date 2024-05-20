const mongoose = require('mongoose')

const resumeSchema = new mongoose.Schema({
    
})

const resumeModel = mongoose.model("resumes",resumeSchema)

module.exports = resumeModel