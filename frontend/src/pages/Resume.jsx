import React from "react";
import { useState, useEffect } from "react";
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import Input from '@mui/material/Input';
import { Button, Card } from "@mui/material";
import Box from "@mui/joy/Box";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from "react-router-dom";

function Resume() {
    const navigate = useNavigate()

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem("user"));
        console.log(user);
        if (user == null)
            navigate("/signup")
    })

    const [personalDetails, setpersonalDetails] = useState({
        uname: '',
        email: '',
        contact: '',
        address: ''
    });

    const [secondary, setSecondary] = useState({
        schoolname: '',
        year_of_passing: '',
        percentage: '',
    })

    const [intermediate, setintermediate] = useState({
        collegename: '',
        year_of_passing: '',
        percentage: '',
        cource: '',
    })

    const [graduation, setgraduation] = useState({
        collegename: '',
        year_of_passing: '',
        percentage: '',
        cource: '',
    })

    var lang = []
    const otherLang = ""
    const temp = ""
    const setLang = (e) => {
        console.log(e.target.value)
        lang.push(e.target.value)
    }

    var techSkills = ["C", "C++", "Java", "JS", "React", "HTML"]

    const handleChangePersonalDetails = (e) => {
        console.log(e)
        const { name, value } = e.target;

        setpersonalDetails({
            ...personalDetails,
            [name]: value
        });
    }

    return (
        <div style={{ display: 'flex' }}>
            <div>
                <p>{personalDetails.uname}</p>
            </div>
            <Box
                height={500}
                p={2}
                pr={8}
                m={1}
                sx={{ border: '2px solid grey' }}
                overflow="scroll"
            >
                <div>
                    <SimpleTreeView>
                        <Card className="m-2 mb-3" style={{ width: "115%" }}>
                            <TreeItem itemId="1" label="PersonalDetails" >
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
                            <TreeItem itemId="2" label="Language">
                                <div style={{ display: "flex", flexDirection: "column", padding: "5px" }}>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} value="English" onChange={setLang} label="English" />
                                        <FormControlLabel control={<Checkbox />} value="Hindi" onChange={setLang} label="Hindi" />
                                        <FormControlLabel control={<Checkbox />} value="Telugu" onChange={setLang} label="Telugu" />
                                    </FormGroup>
                                </div>
                            </TreeItem>
                        </Card>
                        <Card className="m-2 mb-3" style={{ width: "115%" }}>
                            <TreeItem itemId="3" label="Edudation">
                                <div style={{ display: "flex", flexDirection: "column", padding: "5px" }}>
                                    <TreeItem itemId="2-1" label="Secondary Schooling">
                                        <div style={{ display: "flex", flexDirection: "column" }}>
                                            <label>School Name</label>
                                            <Input
                                                placeholder="Enter School Name"
                                                name="schoolname"
                                                value={secondary.schoolname}
                                                onChange={{}}
                                            ></Input>
                                            <label>Year of Passing</label>
                                            <Input
                                                placeholder="Enter Year of Passing"
                                                name="year_of_passing"
                                                value={secondary.year_of_passing}
                                                onChange={{}}
                                            ></Input>
                                            <label>Percentage</label>
                                            <Input
                                                placeholder="Enter Percentage"
                                                name="percentage"
                                                value={secondary.percentage}
                                                onChange={{}}
                                            ></Input>
                                        </div>
                                    </TreeItem>
                                    <TreeItem itemId="2-2" label="Intermediate">
                                        <div style={{ display: "flex", flexDirection: "column" }}>
                                            <label>College Name</label>
                                            <Input
                                                placeholder="Enter College Name"
                                                name="collegename"
                                                value={intermediate.collegename}
                                                onChange={{}}
                                            ></Input>
                                            <label>Course</label>
                                            <RadioGroup >
                                                <Radio value="MPC" label="MPC" />
                                                <Radio value="BiPC" label="BiPC" />
                                                <Radio value="CEC" label="CEC" />
                                            </RadioGroup>
                                            <label>Year of Passing</label>
                                            <Input
                                                placeholder="Enter Year of Passing"
                                                name="year_of_passing"
                                                value={intermediate.year_of_passing}
                                                onChange={{}}
                                            ></Input>
                                            <label>Percentage</label>
                                            <Input
                                                placeholder="Enter Percentage"
                                                name="percentage"
                                                value={intermediate.percentage}
                                                onChange={{}}
                                            ></Input>
                                        </div>
                                    </TreeItem>
                                    <TreeItem itemId="2-3" label="Graduation">
                                        <div style={{ display: "flex", flexDirection: "column" }}>
                                            <label>College Name</label>
                                            <Input
                                                placeholder="Enter College Name"
                                                name="collegename"
                                                value={graduation.collegename}
                                                onChange={{}}
                                            ></Input>
                                            <label>Year of Passing</label>
                                            <Input
                                                placeholder="Enter Year of Passing"
                                                name="year_of_passing"
                                                value={graduation.year_of_passing}
                                                onChange={{}}
                                            ></Input>
                                            <label>Course</label>
                                            <RadioGroup >
                                                <Radio value="B.Tech" label="B.Tech" />
                                                <Radio value="Degree" label="Degree" />
                                            </RadioGroup>
                                            <label>Percentage</label>
                                            <Input
                                                placeholder="Enter Percentage"
                                                name="percentage"
                                                value={graduation.percentage}
                                                onChange={{}}
                                            ></Input>
                                        </div>
                                    </TreeItem>
                                </div>
                            </TreeItem>
                        </Card>
                        <Card className="m-2 mb-3" style={{ width: "115%" }}>
                            <TreeItem itemId="4" label="Technical Skills">
                                <div>
                                    <FormGroup>
                                        {
                                            techSkills.map((e) => {
                                                return (
                                                    <FormControlLabel control={<Checkbox />} label={e} />
                                                )
                                            })
                                        }
                                    </FormGroup>
                                    <Button>Add another</Button>
                                </div>
                            </TreeItem>
                        </Card>
                        <Card className="m-2 mb-3" style={{ width: "115%" }}>
                            <TreeItem itemId="5" label="Expertise">
                                <div>

                                </div>
                            </TreeItem>
                        </Card>
                        <Card className="m-2 mb-3" style={{ width: "115%" }}>
                            <TreeItem itemId="6" label="Certification">
                                <div>

                                </div>
                            </TreeItem>
                        </Card>
                        <Card className="m-2 mb-3" style={{ width: "115%" }}>
                            <TreeItem itemId="7" label="Projects">
                                <div>

                                </div>
                            </TreeItem>
                        </Card>
                        <Card className="m-2 mb-3" style={{ width: "115%" }}>
                            <TreeItem itemId="8" label="Achievements">
                                <div>

                                </div>
                            </TreeItem>
                        </Card>
                        <Card className="m-2 mb-3" style={{ width: "115%" }}>
                            <TreeItem itemId="9" label="Extra Curricular Activities">
                                <div>

                                </div>
                            </TreeItem>
                        </Card>
                    </SimpleTreeView>
                </div>
            </Box>
        </div >
    );
}

export default Resume;