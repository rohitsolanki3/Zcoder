import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { Link } from "react-router-dom"

export const Homepage = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    useEffect(  () => {
        
        async function getUser(){
            const token = localStorage.getItem("token")
            // console.log(token);
            if(!token){
                navigate("/signin");
            }else{
                // console.log(token);
                const response = await axios.get("http://localhost:3000/api/v1/user/details", {
                    headers: {
                        Authorization: token
                    }
                });
                console.log(response.data.user);
                setUser(response.data.user);
            }
        }

        getUser();

    }, [])

    return <div>
      <div className="text-center">
        <h1>Homepage</h1>
        <h4>-- User Info -- </h4>
        <div>{user._id}</div>
        <div>{user.username}</div>
        <div>{user.email}</div>
        <div>{user.password}</div>
        --------------------------
        <div>for complete info check console</div>
        <Link className="pointer underline pl-1 cursor-pointer" to={"/logout"}>
            {"Logout??"}
        </Link>
      </div>
    </div>
  }