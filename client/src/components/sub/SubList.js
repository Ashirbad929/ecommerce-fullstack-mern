import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { getSubs } from '../../ApiFunctions/sub'

const SubList = () => {
    const [subs,setSubs]=useState([])
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        getSubs().then((res)=>{
            setSubs(res.data)
            setLoading(false)
        })
    },[])

  return (
    <div>

        {loading ? (<h1>loading...</h1>
        ):(
            <div >

              {subs.map((s)=>(
                <div key={s._id}><Link to={`/sub/${s.slug}`}>{s.name}</Link></div>
              ))}
            </div>
          


        )}
    </div>
  )
}

export default SubList