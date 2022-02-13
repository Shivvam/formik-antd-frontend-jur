
import Router from 'next/router'
import { Formik } from "formik"
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import { message } from "antd"


import UserForm from '../../components/UserProfile/Forms/userform'

function validateRequired(value) {
    return value ? undefined : "required"
}

export default function CreateProfile() {


    const router = useRouter()
    const { id } = router.query;

    const [profile, setprofile] = useState([]);

    useEffect(() => {
        getProfileFromLocalStorage(id);
        
    }, [id]);

    const getProfileFromLocalStorage = async (ind) => {
        let allprofilesFromLocalStorage = await window.localStorage.getItem('profiles');
        if (allprofilesFromLocalStorage) {
            allprofilesFromLocalStorage = await JSON.parse(allprofilesFromLocalStorage);
            if (allprofilesFromLocalStorage) {
                setprofile(allprofilesFromLocalStorage[ind]);
            }
        }
    }


    const handleEditProfile = async (id,newProfile) => {
        let existingProfilesOnLocalStorage = await window.localStorage.getItem('profiles');
        existingProfilesOnLocalStorage = JSON.parse(existingProfilesOnLocalStorage);
        if (existingProfilesOnLocalStorage) {
            existingProfilesOnLocalStorage[id] = newProfile;
            window.localStorage.setItem('profiles', JSON.stringify(existingProfilesOnLocalStorage));
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
                    firstName: profile?.firstName,
                    lastName: profile?.lastName,
                    tagline: profile?.tagline,
                    workexperiences: profile?.workexperiences,
                    skills: profile?.skills
                }}
                enableReinitialize
                onSubmit={(values, actions) => {
   
                    console.log(JSON.stringify(values, null, 4))
                    handleEditProfile(id,values);
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
                    <UserForm actionText="Update Profile" />
                )}
            />
        </div>
    )
}
