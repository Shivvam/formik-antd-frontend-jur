import { useState, useEffect } from 'react'
import { Row, Col, Button, Typography } from "antd"
import { PlusOutlined } from '@ant-design/icons';
import {
    Input,
} from "formik-antd"
const { Title } = Typography;


export default function Skills({ value }) {


    const [skills, setskills] = useState([]);

    useEffect(() => {
        setskills(value)
    }, [value])

    const addSkill = () => {
        setskills((skills) => [...skills, ""])
    }


    return (
        <div style={{ border: "1px solid #ddd", padding: ".5rem", margin : "1rem" , display: "flex", flexDirection: "column", flex  :"1" }}>

            {(skills && (skills.length > 0))&& 
                <Row>
                <Title style={{ textAlign: "center" }} level={3}>Skills</Title>
                {skills.map((sk, idx) => {
                    return (
                        <Input key={idx} name={`skills[${idx}]`} style={{ margin: ".5rem" }} placeholder="Skill Name e.g. JavaScript" />
                    )
                })
                }

                </Row>
            }


        <div>
        <Button  onClick={addSkill} block >
                    Add Skill <PlusOutlined /> 
        </Button>
        </div>
    </div>
        )
}