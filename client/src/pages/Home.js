import React, { useEffect, useState } from 'react'
import { getProductsByCount } from '../ApiFunctions/product'
import ProductCard from '../components/card/ProductCard'
const Home = () => {
    const [products,setProducts]=useState([])
    const [loading,setLoading]=useState(false);
    const loadAllProducts=()=>{
        getProductsByCount(3).then((res)=>{
            setProducts(res.data)
        })
    }
    useEffect(()=>{

        loadAllProducts();

    },[])
  return (
    <div>Home</div>
  )
}

export default Home