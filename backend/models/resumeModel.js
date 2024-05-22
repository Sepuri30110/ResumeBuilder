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
    eca : Array,

},{ timestamps: true })

resumeSchema.statics.postData = async function(userName,pd,sec,inter,grad,lang,choosenTechSkills,expertise,certificate,projects,achievements,eca){
    const resume = await this.create(userName,pd,sec,inter,grad,lang,choosenTechSkills,expertise,certificate,projects,achievements,eca)
    return resume
}

const ResumeModel = mongoose.model("resumes",resumeSchema)

module.exports = ResumeModel