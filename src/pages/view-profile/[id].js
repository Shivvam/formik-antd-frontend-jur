import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import { Descriptions } from 'antd'
import ExperienceDisplay from '../../components/UserProfile/Display/experiencedisplay'
import SkillsDisplay from '../../components/UserProfile/Display/skillsdisplay'
import Link from 'next/link'

const Post = () => {
    const router = useRouter()
    const { id } = router.query;

    const [profile, setprofile] = useState({});

    useEffect(() => {
        getProfileFormLocalStorage(id);
    }, [id]);

    const getProfileFormLocalStorage = async (ind) => {
        let allprofilesFromLocalStorage = await window.localStorage.getItem('profiles');
        if (allprofilesFromLocalStorage) {
            allprofilesFromLocalStorage = await JSON.parse(allprofilesFromLocalStorage);
            if (allprofilesFromLocalStorage) {
                setprofile(allprofilesFromLocalStorage[ind]);
            }
        }
    }

    return (
        <div style={{  padding: "1rem" }} >
         
            {profile &&

                <Descriptions title={`${profile?.firstName}  ${profile?.lastName}`} style={{ background: "#fff", margin: "1rem", padding : "1rem" }}>
                    <Descriptions.Item label="First Name">{profile?.firstName}</Descriptions.Item>
                    <Descriptions.Item label="Last Name">{profile?.lastName}</Descriptions.Item>
                    <Descriptions.Item label="Tagline">{profile?.tagline}</Descriptions.Item>
                    <Descriptions.Item label="Work Experience">
                        <ExperienceDisplay workexperiences={profile?.workexperiences} />
                    </Descriptions.Item>
                    <Descriptions.Item label="Skills">
                        <SkillsDisplay skills={profile?.skills} />
                    </Descriptions.Item>
                </Descriptions>
            }

            <Link href="/">Back to Home</Link>
       
        </div>
        ) 
}

export default Post