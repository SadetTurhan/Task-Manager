import { useAuth } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import { TasksTable } from "./TasksTable"
function ProfilePage(){
    const auth = useAuth()
    const navigate = useNavigate()
    const handleLogout = () =>{
        auth.logout()
        navigate('/')
    }
    return(
        <div>
            <p>Welcome! {auth.user}</p>
            <button onClick={handleLogout}>LogOut</button>
            <TasksTable></TasksTable>
        </div>
    )
}
export { ProfilePage };