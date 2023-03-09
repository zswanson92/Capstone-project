import { useSelector } from "react-redux";
import './UserProfile.css'



const UserProfile = () => {
    const sessionUser = useSelector(state => state.session.user);

    return (
        <div className="initial-state-div">
                {sessionUser ? <div className="initial-state-div-inside-divs">Full Name: {sessionUser?.fullname}</div> : <div className="initial-state-div-inside-divs">No user currently logged in.</div>}
                {sessionUser ? <div className="initial-state-div-inside-divs">Username: {sessionUser?.username}</div> : ""}
                {sessionUser ? <div className="initial-state-div-inside-divs">User email: {sessionUser?.email}</div> : ""}
                {sessionUser ? <h1>Rest of the user profile coming soon.</h1> : ""}
        </div>
    )
}

export default UserProfile;
