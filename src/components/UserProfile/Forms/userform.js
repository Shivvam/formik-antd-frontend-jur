import {
    Form,
    Input,
    Field,
    FormItem,
    SubmitButton,
 
} from "formik-antd"
import { Row, Col, Button, Typography} from "antd"
import ExperienceField from './experiencefields';
import SkillField from './skillsfield';
import Link from 'next/link'
const { Title } = Typography;

function validateRequired(value) {
    return value ? undefined : "This Field is Required"
}

export default function UserForm({ actionText }) {
    return (
        <Form
            style={{ display: "grid", gridTemplateColumns: "1fr", marginLeft: "10rem", marginRight: "10rem" }}

            wrapperCol={{ xs: 20 }}
        >

            <div style={{ background: "white", flex: 1, margin: "1rem", padding: "1rem" }}>
                <Title style={{ textAlign: "center" }} level={2}>{actionText}</Title>

                <FormItem
                    name="firstName"
                    label="Firstname"
                    required={true}
                    validate={validateRequired}
  
                >
                    <Input name="firstName" placeholder="Firstname" />
                </FormItem>
                <FormItem name="lastName" label="Lastname" required={true}>
                    <Input name="lastName" placeholder="Lastname" />
                </FormItem>
                <FormItem name="tagline" label="Tagline" required={true}>
                    <Input name="tagline" placeholder="Tagline e.g. React JS Developer" />
                </FormItem>
                <Field name="workexperiences" as={ExperienceField} placeholder="Experience" />
                <Field name="skills" as={SkillField} placeholder="Skills" />

                <Row style={{ marginTop: 15 }}>
                    <Col offset={8}>
                        <Button.Group>
                            <SubmitButton> {actionText} </SubmitButton>
                            <Link href="/"><span style={{ margin: ".2rem 1rem", color: "blue", cursor: "pointer" }} >Back to Home</span></Link>
                        </Button.Group>
                    </Col>
                </Row>

            </div>
          
        </Form>
    )
}