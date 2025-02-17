import React from 'react'
import toast from 'react-hot-toast';
import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
const useLogin = () => {
    const [loading,setLoading] = useState(false);
   const {setAuthUser} = useAuthContext();

    const login = async(username,password)=>{
    const success = handleInputErrors(username,password);
    if(!success){
        return ;
    }

    setLoading(true);
   

    try{

        const res = await fetch("/api/auth/login",{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({username,password})
        }
        )
        const data = await res.json();
        if(data.error) throw new Error(data.error);

        localStorage.setItem("chat-user",JSON.stringify(data));
        setAuthUser(data);
        toast.success("welcome 👋")
        console.log(data);
    }catch(error){
        toast.error(error.message);
    }
    finally{
        setLoading(false);
    }
}

return {login,loading}
}
function handleInputErrors(username,password) {
    console.log("this is error handling")
    if (!username || !password) {
        toast.error("Please fill in all fields");
        return false;
    }
    

    return true;
}

export default useLogin;