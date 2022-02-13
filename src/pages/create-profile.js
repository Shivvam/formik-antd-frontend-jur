import Router from 'next/router'
import { Formik } from "formik"
import UserForm from '../components/UserProfile/Forms/userform'


export default function CreateProfile() {

    
    const workExObject = {                                    //for initializing the work expereince array of objects
        "company": "",
        "titleOrRole": "",
        "startDate": "",
        "endDate": "",
        "isCurrentJob": false,
        "description": ""
    };
 
    

    const handleCreateProfile = async (newProfile) => {
        let existingProfilesOnLocalStorage = await window.localStorage.getItem('profiles');
        existingProfilesOnLocalStorage = JSON.parse(existingProfilesOnLocalStorage);
        if (existingProfilesOnLocalStorage) {
            let profileToSave = [newProfile, ...existingProfilesOnLocalStorage];
            window.localStorage.setItem('profiles', JSON.stringify(profileToSave));
        } else {
            window.localStorage.setItem('profiles', JSON.stringify([newProfile]));
        }

        Router.push('/')
    }

    return (
        <div
            style={{
                marginTop: 20,
            }}
        >
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    tagline: "",
                    workexperiences: [workExObject],
                    skills : [""]
                }}
                onSubmit={(values, actions) => {
             
                    console.log(JSON.stringify(values, null, 4))
                    handleCreateProfile(values);
                    actions.setSubmitting(false)
                    actions.resetForm()
                }}
                validate={values => {
                    if (!values.lastName) {
                        return { lastName: "required" }
                    }
                    return {}
                }}
                render={() => (
                    <UserForm actionText="Create Profile" />
                )}
            />
        </div>
    )
}
