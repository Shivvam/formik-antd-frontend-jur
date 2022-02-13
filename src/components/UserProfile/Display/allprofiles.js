import { useState, useEffect } from 'react';
import { Table, Space } from "antd"
import Link from 'next/link'
import ExperienceDisplay from './experiencedisplay'
import SkillsDisplay from './skillsdisplay'
import { EditOutlined , InfoCircleOutlined } from '@ant-design/icons';


export default function AllProfiles() {

    const [allProfiles, setallProfiles] = useState([]);

    useEffect(() => {
        getAllProfiles();
    }, []);

    const getAllProfiles = async () => {
        let profilesFromLocalStorage = await window.localStorage.getItem('profiles');
        if (profilesFromLocalStorage) {
            let p = JSON.parse(profilesFromLocalStorage);
            
            setallProfiles(p);
        }

    }

    const tableColumns = [
        {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName',
            render: text => <a>{text}</a>,
 
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName',
            render: text => <a>{text}</a>,
       
        },
        {
            title: 'Tagline',
            dataIndex: 'tagline',
            key: 'tagline',
            render: text => <a>{text}</a>,
            responsive: ["sm"]
        },
        {
            title: 'Work Experiences',
            dataIndex: 'workexperiences',
            key: 'workexperiences',
            render: exps => (
                <ExperienceDisplay workexperiences={exps} />
            ),
            responsive: ["sm"]
        },
        {
            title: 'Skills',
            dataIndex: 'skills',
            key: 'skills',
            render: text => <SkillsDisplay skills={text} />,
            responsive: ["sm"]
        },
         
    
        {
            title: 'Action',
            key: 'action',
            render: (text, record, index) => (
                <Space size="large" direction="vertical">
                    <span>
                        <InfoCircleOutlined />  <Link href={`/view-profile/${index}`} >   View Profile   </Link>
                    </span>
                    <span>
                        <EditOutlined />  <Link href={`/edit-profile/${index}`} >    Edit Profile  </Link>
                    </span>
                </Space>
            ),
        },
    ];

    return (
        <div>
            {(allProfiles && (allProfiles.length > 0)) &&
                <Table dataSource={allProfiles} columns={tableColumns} style={{ marginTop :"1rem" }} />
            }

        </div>
    )
}