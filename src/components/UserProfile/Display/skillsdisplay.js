import { Tag } from 'antd'

export default function SkillsDisplay({ skills }) {
    return (
        <>
            {(skills && (skills.length)) &&
                <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "column" }}>
                {skills.map((skill, idx) => {
                    return (
                        <Tag style={{ margin: "2px", textAlign: "center" }} key={idx}>{skill}</Tag>
                    )
                })}
                </div>
            }
            </>
    )
}