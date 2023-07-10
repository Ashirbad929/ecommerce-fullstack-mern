import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const LoadingToredirect = () => {
   const navigate=useNavigate(); 
 const [count,setCount]=useState(8)

 useEffect(()=>{
    const interval=setInterval(()=>{
        setCount((currentCount)=> --currentCount)

    },1000)
    //redirect when count ==0
    count===0 && navigate('/')
    return ()=>clearInterval(interval)

 },[count])

 return <div>
    <p>redirecting you in {count} seconds</p>
 </div>
}

export default LoadingToredirect