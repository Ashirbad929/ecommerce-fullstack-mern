import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getSub } from '../../ApiFunctions/sub';
import { message } from 'antd';
import '../../css/categoryitems.css'
import ProductCard from '../card/ProductCard';
const SubHome = () => {
    const [sub,setSub]=useState({})
    const [products,setProducts]=useState([]);
    const [loading,setLoading]=useState(false)

    const {slug}=useParams();

    useEffect(()=>{
        setLoading(true)
        getSub(slug)
        .then((res)=>{
            // console.log(JSON.stringify(c.data))
            setSub(res.data.sub)
            setProducts(res.data.products)
            setLoading(false)


        }).catch((err)=>{
            message.error("backend error")
        })

    },[])
  return (
    <div className='category-items'>
        {/* {slug} */}
    {loading?(<h4 >loading...</h4>):(
        <h4 className='category-items-header'> fetched {products.length}  items from  "{sub.name}" sub category</h4>
    )}
    
    {/* {JSON.stringify(category)} */}
    <div className='products'>
        {products.map((p)=>(
            <ProductCard key={p._id} product={p}/>
        ))}
    </div>
    </div>
  )
}

export default SubHome