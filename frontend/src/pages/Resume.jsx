import React from "react";
import { useState, useEffect } from "react";
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import Input from '@mui/joy/Input';
import { Button, Card } from "@mui/material";
import Box from "@mui/joy/Box";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ResumeDisplay from "../components/ResumeDisplay";
import { useRef } from "react";

function Resume() {

    const pdf = useRef()

    const { userName, password } = JSON.parse(sessionStorage.getItem("user"))

    const handleSubmit = () => {
        // console.log(personalDetails)
        axios.post('http://localhost:3001/api/user/resume', { userName, pd, sec, inter, grad, lang,choosenTechSkills,expertise,certificate,projects,achievements,ECA})
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log("Error", err)
            })
    }

    const handleDownload = () => {
        //   const content = pdf.current
        window.html2pdf(pdf.current).save();
    }

    const navigate = useNavigate()

    //pd-personalDetails
    //sec-secondarySchool
    //inter-intermediate
    //grad-graduation
    //lang-languages
    //choosenTechSkills - techSkills

    const pd = []
    const sec = []
    const inter = []
    const grad = []

    useEffect(() => {

        const user = JSON.parse(sessionStorage.getItem("user"));
        // console.log(user);
        if (user == null)
            navigate("/signup")

        pd[0] = personalDetails.uname
        pd[1] = personalDetails.email
        pd[2] = personalDetails.contact
        pd[3] = personalDetails.address
        //console.log(pd)

        sec[0] = secondary.schoolname
        sec[1] = secondary.year_of_passing
        sec[2] = secondary.percentage
        // console.log(sec)

        inter[0] = intermediate.collegename
        inter[1] = intermediate.year_of_passing
        inter[2] = intermediate.percentage
        inter[3] = intermediate.course
        console.log(inter)

        grad[0] = graduation.collegename
        grad[1] = graduation.year_of_passing
        grad[2] = graduation.percentage
        grad[3] = graduation.course
        console.log(grad)

    })

    const [personalDetails, setpersonalDetails] = useState({
        uname: '',
        email: '',
        contact: '',
        address: ''
    });

    const handleChangePersonalDetails = (e) => {
        // console.log(e.target)
        const { name, value } = e.target;

        setpersonalDetails({
            ...personalDetails,
            [name]: value
        });
    }

    var lang = []
    const setLang = (e) => {
        if (e.target.checked) {
            // console.log("--------")
            lang.push(e.target.value)
        }
        else {
            // console.log("**********")
            const i = lang.indexOf(e.target.value)
            if (i !== -1) {
                lang.splice(i, 1)
            }
        }
        // console.log(lang)
    }

    const [secondary, setSecondary] = useState({
        schoolname: '',
        year_of_passing: '',
        percentage: '',
    })

    const handleSecondary = (e) => {
        const { name, value } = e.target;
        setSecondary({
            ...secondary,
            [name]: value
        });
    }

    const [intermediate, setIntermediate] = useState({
        collegename: '',
        year_of_passing: '',
        percentage: '',
        course: '',
    })

    const handleIntermediate = (e) => {
        const { name, value } = e.target;
        setIntermediate({
            ...intermediate,
            [name]: value
        });
    }

    const intermediateCourseChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setIntermediate({
            ...intermediate,
            course: value
        })
    }

    const [graduation, setGraduation] = useState({
        collegename: '',
        year_of_passing: '',
        percentage: '',
        course: '',
    })


    const handleGraduation = (e) => {
        const { name, value } = e.target;
        setGraduation({
            ...graduation,
            [name]: value
        });
    }

    const graduationCourseChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setGraduation({
            ...graduation,
            course: value
        })
        // console.log(intermediate)
    }

    var techSkills = ["C", "C++", "Java", "JS", "React", "HTML"]
    var choosenTechSkills = []
    const setTechSkills = (e) => {
        if (e.target.checked) {
            choosenTechSkills.push(e.target.value)
        }
        else {
            const i = choosenTechSkills.indexOf(e.target.value)
            if (i !== -1) {
                choosenTechSkills.splice(i, 1)
            }
        }
        // console.log(choosenTechSkills)
    }

    const [expertise, setExpertise] = useState([""])
    const expertiseChange = (e, i) => {
        const { value } = e.target
        const temp = [...expertise]
        temp[i] = value
        setExpertise(temp)
        // console.log(expertise)
    }
    const expertiseAdd = () => {
        setExpertise([...expertise, ""])
        // console.log(expertise)
    }
    const expertiseDelete = (i) => {
        const temp = [...expertise]
        temp.splice(i, 1)
        setExpertise(temp)
        // console.log(expertise)
    }

    const [certificate, setCertificate] = useState([""])
    const certificateChange = (e, i) => {
        const { value } = e.target
        const temp = [...certificate]
        temp[i] = value
        setCertificate(temp)
        // console.log(certificate)
    }
    const certificateAdd = () => {
        setCertificate([...certificate, ""])
        // console.log(certificate)
    }
    const certificateDelete = (i) => {
        const temp = [...certificate]
        temp.splice(i, 1)
        setCertificate(temp)
        // console.log(certificate)
    }

    const [projects, setProjects] = useState([""])
    const projectsChange = (e, i) => {
        const { value } = e.target
        const temp = [...projects]
        temp[i] = value
        setProjects(temp)
        // console.log(projects)
    }
    const projectsAdd = () => {
        setProjects([...projects, ""])
        // console.log(projects)
    }
    const projectsDelete = (i) => {
        const temp = [...projects]
        temp.splice(i, 1)
        setProjects(temp)
        // console.log(projects)
    }

    const [achievements, setAchievements] = useState([""])
    const achievementsChange = (e, i) => {
        const { value } = e.target
        const temp = [...achievements]
        temp[i] = value
        setAchievements(temp)
        // console.log(achievements)
    }
    const achievementsAdd = () => {
        setAchievements([...achievements, ""])
        // console.log(achievements)
    }
    const achievementsDelete = (i) => {
        const temp = [...achievements]
        temp.splice(i, 1)
        setAchievements(temp)
        // console.log(achievements)
    }

    const [ECA, setECA] = useState([""])
    const ECAChange = (e, i) => {
        const { value } = e.target
        const temp = [...ECA]
        temp[i] = value
        setECA(temp)
        // console.log(ECA)
    }
    const ECAAdd = () => {
        setECA([...ECA, ""])
        // console.log(ECA)
    }
    const ECADelete = (i) => {
        const temp = [...ECA]
        temp.splice(i, 1)
        setECA(temp)
        // console.log(ECA)
    }

    const handle = (e) => {
        e.preventDefault()
        // console.log(e)
    }

    return (
        <div style={{ display: 'flex' }}>
            <div ref={pdf}>
                <Box>
                    <ResumeDisplay />
                </Box>
            </div>
            <Box
                height={500}
                p={2}
                pr={8}
                m={1}
                sx={{ border: '2px solid grey' }}
                overflow="scroll"
                style={{ marginLeft: "100px" }}
            >
                <div>
                    <SimpleTreeView style={{ display: "flex", flexDirection: "column" }}>
                        <Card className="m-2 mb-3" style={{ width: "115%" }}>
                            <TreeItem itemId="1" label=" PersonalDetails" onClick={handle} >
                                <div style={{ display: "flex", flexDirection: "column", padding: "5px" }}>
                                    <div style={{ display: "flex", flexDirection: "column", width: "90%" }}>
                                        <label>Name</label>
                                        <Input
                                            placeholder="Enter Name"
                                            name="uname"
                                            value={personalDetails.uname}
                                            onChange={handleChangePersonalDetails}
                                        ></Input>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", width: "90%" }}>
                                        <label>E-mail</label>
                                        <Input
                                            placeholder="Enter Email"
                                            name="email"
                                            value={personalDetails.email}
                                            onChange={handleChangePersonalDetails}
                                        ></Input>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", width: "90%" }}>
                                        <label>Contact</label>
                                        <Input
                                            placeholder="Enter Contact"
                                            name="contact"
                                            value={personalDetails.contact}
                                            onChange={handleChangePersonalDetails}
                                        ></Input>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", width: "90%" }}>
                                        <label>Address</label>
                                        <Input
                                            placeholder="Enter Address"
                                            name="address"
                                            value={personalDetails.address}
                                            onChange={handleChangePersonalDetails}
                                        ></Input>
                                    </div>
                                </div>
                            </TreeItem>
                        </Card>
                        <Card className="m-2 mb-3" style={{ width: "115%" }}>
                            <TreeItem itemId="2" label=" Language" onClick={handle}>
                                <div style={{ display: "flex", flexDirection: "column", padding: "5px" }}>
                                    <FormGroup>
                                        <FormControlLabel id="lang1" name="lang1" control={<Checkbox />} value="English" onChange={setLang} label="English" />
                                        <FormControlLabel id="lang2" name="lang2" control={<Checkbox />} value="Hindi" onChange={setLang} label="Hindi" />
                                        <FormControlLabel id="lang3" name="lang3" control={<Checkbox />} value="Telugu" onChange={setLang} label="Telugu" />
                                    </FormGroup>
                                </div>
                            </TreeItem>
                        </Card>
                        <Card className="m-2 mb-3" style={{ width: "115%" }}>
                            <TreeItem itemId="3" label=" Education" onClick={handle}>
                                <div style={{ display: "flex", flexDirection: "column", padding: "5px" }}>
                                    <TreeItem itemId="2-1" label=" Secondary Schooling">
                                        <div style={{ display: "flex", flexDirection: "column" }}>
                                            <label>School Name</label>
                                            <Input
                                                placeholder="Enter School Name"
                                                name="schoolname"
                                                value={secondary.schoolname}
                                                onChange={handleSecondary}
                                            ></Input>
                                            <label>Year of Passing</label>
                                            <Input
                                                placeholder="Enter Year of Passing"
                                                name="year_of_passing"
                                                value={secondary.year_of_passing}
                                                onChange={handleSecondary}
                                            ></Input>
                                            <label>Percentage</label>
                                            <Input
                                                placeholder="Enter Percentage"
                                                name="percentage"
                                                value={secondary.percentage}
                                                onChange={handleSecondary}
                                            ></Input>
                                        </div>
                                    </TreeItem>
                                    <TreeItem itemId="2-2" label=" Intermediate">
                                        <div style={{ display: "flex", flexDirection: "column" }}>
                                            <label>College Name</label>
                                            <Input
                                                placeholder="Enter College Name"
                                                name="collegename"
                                                value={intermediate.collegename}
                                                onChange={handleIntermediate}
                                            ></Input>
                                            <label>Course</label>
                                            <RadioGroup onChange={handle} >
                                                <Radio id="1" name="course" value="MPC" label="MPC" onChange={intermediateCourseChange} />
                                                <Radio id="2" name="course" value="BiPC" label="BiPC" onChange={intermediateCourseChange} />
                                                <Radio id="3" name="course" value="CEC" label="CEC" onChange={intermediateCourseChange} />
                                            </RadioGroup>
                                            <label>Year of Passing</label>
                                            <Input
                                                placeholder="Enter Year of Passing"
                                                name="year_of_passing"
                                                value={intermediate.year_of_passing}
                                                onChange={handleIntermediate}
                                            ></Input>
                                            <label>Percentage</label>
                                            <Input
                                                placeholder="Enter Percentage"
                                                name="percentage"
                                                value={intermediate.percentage}
                                                onChange={handleIntermediate}
                                            ></Input>
                                        </div>
                                    </TreeItem>
                                    <TreeItem itemId="2-3" label=" Graduation">
                                        <div style={{ display: "flex", flexDirection: "column" }}>
                                            <label>College Name</label>
                                            <Input
                                                placeholder="Enter College Name"
                                                name="collegename"
                                                value={graduation.collegename}
                                                onChange={handleGraduation}
                                            ></Input>
                                            <label>Year of Passing</label>
                                            <Input
                                                placeholder="Enter Year of Passing"
                                                name="year_of_passing"
                                                value={graduation.year_of_passing}
                                                onChange={handleGraduation}
                                            ></Input>
                                            <label>Course</label>
                                            <RadioGroup >
                                                <Radio value="B.Tech" label="B.Tech" onChange={graduationCourseChange} />
                                                <Radio value="Degree" label="Degree" onChange={graduationCourseChange} />
                                            </RadioGroup>
                                            <label>Percentage</label>
                                            <Input
                                                placeholder="Enter Percentage"
                                                name="percentage"
                                                value={graduation.percentage}
                                                onChange={handleGraduation}
                                            ></Input>
                                        </div>
                                    </TreeItem>
                                </div>
                            </TreeItem>
                        </Card>
                        <Card className="m-2 mb-3" style={{ width: "115%" }}>
                            <TreeItem itemId="4" label=" Technical Skills" onClick={handle}>
                                <div>
                                    <FormGroup>
                                        {
                                            techSkills.map((e, i) => {
                                                return (
                                                    <FormControlLabel id={i} control={<Checkbox />} value={e} label={e} onChange={setTechSkills} />
                                                )
                                            })
                                        }
                                    </FormGroup>
                                </div>
                            </TreeItem>
                        </Card>
                        <Card className="m-2 mb-3" style={{ width: "115%" }}>
                            <TreeItem itemId="5" label=" Expertise" onClick={handle}>
                                <div>
                                    <Button onClick={expertiseAdd} >Add</Button>
                                    {
                                        expertise.map((d, i) => {
                                            return (
                                                <div style={{ display: "flex" }}>
                                                    <Input value={d} onChange={(e) => { expertiseChange(e, i) }} />
                                                    <button onClick={expertiseDelete}>x</button>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </TreeItem>
                        </Card>
                        <Card className="m-2 mb-3" style={{ width: "115%" }}>
                            <TreeItem itemId="6" label=" Certification" onClick={handle}>
                                <div>
                                    <Button onClick={certificateAdd} >Add</Button>
                                    {
                                        certificate.map((d, i) => {
                                            return (
                                                <div style={{ display: "flex" }}>
                                                    <Input value={d} onChange={(e) => { certificateChange(e, i) }} />
                                                    <button id={i} onClick={() => certificateDelete(i)}>x</button>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </TreeItem>
                        </Card>
                        <Card className="m-2 mb-3" style={{ width: "115%" }}>
                            <TreeItem itemId="7" label=" Projects" onClick={handle}>
                                <div>
                                    <Button onClick={projectsAdd} >Add</Button>
                                    {
                                        projects.map((d, i) => {
                                            return (
                                                <div style={{ display: "flex" }}>
                                                    <Input value={d} onChange={(e) => { projectsChange(e, i) }} />
                                                    <button id={i} onClick={() => projectsDelete(i)}>x</button>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </TreeItem>
                        </Card>
                        <Card className="m-2 mb-3" style={{ width: "115%" }}>
                            <TreeItem itemId="8" label=" Achievements" onClick={handle}>
                                <div>
                                    <Button onClick={achievementsAdd} >Add</Button>
                                    {
                                        achievements.map((d, i) => {
                                            return (
                                                <div style={{ display: "flex" }}>
                                                    <Input value={d} onChange={(e) => { achievementsChange(e, i) }} />
                                                    <button id={i} onClick={() => achievementsDelete(i)}>x</button>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </TreeItem>
                        </Card>
                        <Card className="m-2 mb-3" style={{ width: "115%" }}>
                            <TreeItem itemId="9" label=" Extra Curricular Activities" onClick={handle}>
                                <div>
                                    <Button onClick={ECAAdd} >Add</Button>
                                    {
                                        ECA.map((d, i) => {
                                            return (
                                                <div style={{ display: "flex" }}>
                                                    <Input value={d} onChange={(e) => { ECAChange(e, i) }} />
                                                    <button id={i} onClick={() => ECADelete(i)}>x</button>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </TreeItem>
                        </Card>
                        <div style={{ display: "flex", alignSelf: "center" }}>
                            <Button onClick={handleSubmit} style={{ marginLeft: "45px" }}>Submit</Button>
                            <Button onClick={handleDownload} style={{ marginLeft: "5px" }}>Download</Button>
                        </div>
                    </SimpleTreeView>
                </div>
            </Box>
        </div >
    );
}

export default Resume;