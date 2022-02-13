import { useState , useEffect } from 'react'
import {
    Input,
    DatePicker,
    Checkbox,
    FormItem,
} from "formik-antd"
import { Button, Typography, Row, Col } from "antd";
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
const { Title } = Typography;

export default function Experience({value}) {

 
    
    const workExObj = {
        "company": "",
        "titleOrRole": "",
        "startDate": "",
        "endDate": "",
        "isCurrentJob": false,
        "description": ""

    };

 

    const [workexperiences, set_workexperiences] = useState([]);

    useEffect(() => {
        set_workexperiences(value);
    }, [value])

    const handleAddExperience = () => {
        set_workexperiences((workexperiences) => [...workexperiences, workExObj]);
    }

    const handleRemoveExperience = (idx) => {
        let experienceAfterRemove = workexperiences.filter((we, i) => idx != i);
        set_workexperiences(experienceAfterRemove);
    }

    return (
        <div style={{ margin: ".5rem" }}>
            <Title style={{ textAlign: "center" }} level={3}>Work Experience</Title>
   
            {(workexperiences && (workexperiences.length > 0)) &&
                <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", flex: "1",   }} >
        
                {workexperiences.map((we, idx) => {
                    return (
                        <div key={idx} style={{ "border": "1px solid #ddd", "padding": ".5rem", margin: ".5rem", display: "flex", flexDirection: "column", width: "100%" }}>
                            <Row>
                                <Col span={18}>
                                </Col>
                                <Col span={4}>
                                    <Button type="danger" onClick={handleRemoveExperience.bind(this, idx)}  >Remove Experience <MinusCircleOutlined /> </Button>
                                </Col>
                            </Row>
                            <Row style={{ marginTop : ".5rem" }}>
                                <Col span={24}>
                                    <FormItem name="company" label="Company Name" required={true}>
                                        <Input name={`workexperiences[${idx}]['company']`} placeholder="Company Name" />
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row  >
                                <Col span={24}>
                                    <FormItem name="titleOrRole" label="Title Or Role" required={true}>
                                        <Input name={`workexperiences[${idx}]['titleOrRole']`} placeholder="Title Or Role e.g. Lead Developer" />
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row  >
                                <Col span={8}>
                                    <FormItem name="startdate" label="Start Date" required={true}>
                                        <DatePicker.MonthPicker name={`workexperiences[${idx}]['startdate']`} placeholder="Start Date" format="MMM-YYYY" />
                                    </FormItem>
                                </Col>
                                <Col span={8}>
                                    <FormItem name="isCurrentJob" label="Currently Working here ?">
                                        <Checkbox name={`workexperiences[${idx}]['isCurrentJob']`} />
                                    </FormItem>
                                </Col>
                                <Col span={8}>
                                    {!(value[idx]?.isCurrentJob) &&
                                        <FormItem name="enddate" label="End Date" required={true}>
                                            <DatePicker.MonthPicker name={`workexperiences[${idx}]['enddate']`} placeholder="End Date" format="MMM-YYYY" disabled={value[idx]?.isCurrentJob || false} />
                                        </FormItem>
                                    }
                                </Col>
                            </Row>
                            <Row >
                                <Col span={24}>
                                    <FormItem name="description" label="Description" >
                                        <Input.TextArea name={`workexperiences[${idx}]['description']`} placeholder="Description of your work experience" />
                                    </FormItem>
                                </Col>
                            </Row>
                        </div>
                    )
                })}


                </div>
            }

            <Button
                onClick={handleAddExperience}
                style={{ background: "green", color: "white", marginLeft : ".5rem", borderRadius : ".3rem" }}
            >
                Add Experience
                <PlusOutlined />
            </Button>
            
        </div>
    )
}