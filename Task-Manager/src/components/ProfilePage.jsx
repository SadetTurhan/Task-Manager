import { useAuth } from "../utils/auth";
import { useNavigate } from "react-router-dom";
function ProfilePage(){
    const auth = useAuth()
    const navigate = useNavigate()
    const handleLogout = () =>{
        auth.logout()
        navigate('/')
    }
    return(
        <div>
            <p>Profile Page{auth.user}</p>
            <button onClick={handleLogout}>LogOut</button>
        </div>
    )
}
export { ProfilePage };