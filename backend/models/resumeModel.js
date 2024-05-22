const mongoose = require('mongoose')

const resumeSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    pd : Array,
    sec : Array,
    inter : Array,
    grad : Array,
    lang : Array,
    choosenTechSkills : Array,
    expertise : Array,
    certificate : Array,
    projects : Array,
    achievements : Array,
    ecs : Array,

},{ timestamps: true })

const ResumeModel = mongoose.model("resumes",resumeSchema)

module.exports = ResumeModel