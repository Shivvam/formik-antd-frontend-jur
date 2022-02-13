
import AllProfiles from '../components/UserProfile/Display/allprofiles';
import Link from 'next/link'

export default function Home() {
    return (
        <div>
            <div style={{ "padding": "1rem", "textAlign": "center", margin : "1rem" }} >
                <Link
                    href="/create-profile"
                    
                >
                    <span
                        style={{ background: "#00a2ed", color: "white", padding: "1rem", borderRadius: "5px", cursor: "pointer", }}
                        title="Create a Profile"
                    >
                        Create a Profile
                    </span>
                </Link>          
            </div>
            <div style={{ "padding": ".5rem", "textAlign": "center" }} >
                <AllProfiles />
            </div>
        </div>
    )
}
