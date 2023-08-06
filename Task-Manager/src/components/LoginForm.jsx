import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/auth";
function LoginForm(){
  const [ user, setUser ] = useState('')
  const auth = useAuth()
  const navigate = useNavigate()
  const handleLogin = () => {
      auth.login(user)
      navigate("/profile")
  }
    const { register, handleSubmit } = useForm();
    function loginProfile(){
      if(auth.user){
        navigate("/profile")
      }else{
        navigate('/profile')
      }
    }  
    const [data, setData] = useState([]);

    return (
        <div className="mt-4 ml-24 bg-green-300 w-3/4">
      <form className="space-y-4 inline-flex flex-col" onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        <label>Account Name</label><input type="text" className="bg-amber-100 p-4 m-2" {...register("accountName")} placeholder="Account name" onChange={e => setUser(e.target.value)} />
        <label>E mail</label><input className="bg-amber-100 p-4 m-2" {...register("email")} placeholder="E-mail" />
        <input className="text-green bg-amber-100 hover:bg-blue-800 w-20 ml-24" type="submit" value="submit" onClick={handleLogin}/>
      </form>
      </div>
    );
}

export default LoginForm ;