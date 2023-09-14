import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth } from '../Config/Firebase';
import {useNavigate  } from 'react-router-dom';

const MainLayout = ({children}) => {

    const [mount,setMount] = useState(true);
    const navigate = useNavigate();

    useEffect(()=>{
            onAuthStateChanged(auth,(user)=>{
                if(user)
                {
                    setMount(false);
                }
                else{
                    navigate('/login');
                    
                }
            })
    },[navigate])

    if(mount){
        return <h1>Loading...</h1>
    }
  return (
    <div>
            {children}
    </div>
  )
}

export default MainLayout