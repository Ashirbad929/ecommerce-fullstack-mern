import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { getCategories } from '../../ApiFunctions/category'

const CategoryList = () => {
    const [categories,setCategories]=useState([])
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        getCategories().then((res)=>{
            setCategories(res.data)
            setLoading(false)
        })
    },[])

  return (
    <div>

        {loading ? (<h1>loading...</h1>
        ):(
            <div >

              {categories.map((c)=>(
                <div><Link to={`/category/${c.slug}`}>{c.name}</Link></div>
              ))}
            </div>
          


        )}
    </div>
  )
}

export default CategoryList