import React, { useDebugValue, useEffect, useState } from "react";
import { getProductsByCount, fetchproductsByFilter } from "../ApiFunctions/product";
import { useDispatch, useSelector } from "react-redux";

import ProductCard from "../components/card/ProductCard";
import { Searchquery } from "../store/slices/searchSlice";
import {getCategories} from '../ApiFunctions/category'
import { Menu, Slider,Checkbox } from "antd";

import "../css/shop.css"; // Import the CSS file where we'll put our styles

const Shop = () => {
    // const [reload,setReload]=useState(false)
  const { SubMenu } = Menu;
  const text = useSelector((state) => state.search.text);
  const dispatch=useDispatch();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true); // Set loading to true initially
  const [price, setPrice] = useState([0, 0]);
  const [categoryIds,setCategoryIds]=useState([])
  const [ok,setOk]=useState(false)
    const handleSlider=(value)=>{
        dispatch(Searchquery(""))
        setPrice(value)
        setTimeout(()=>{
            setOk(!ok)
            
        },300)
    }
    const handleCheck=(e)=>{
      console.log(e.target.value)
      let prev=[...categoryIds]
      let justchecked=e.target.value
      console.log(e.target)
      let foundInstate=prev.indexOf(justchecked) //use this value
      //if found returns -1 else index
      if(foundInstate===-1){

        prev.push(justchecked)

      }else{
        prev.splice(foundInstate,1)
      }
      setCategoryIds(prev);
      console.log(categoryIds)
      fetchProducts({category:prev})



    }
  const loadAllProducts = () => {
    getProductsByCount(12).then((p) => {
      setProducts(p.data);
      setLoading(false); // After loading the products, set loading to false

    });
  };
  const fetchProducts = (text) => {
    fetchproductsByFilter(text).then((res) => {
      setProducts(res.data);
    });
  };
 
  

  useEffect(() => {
   
    loadAllProducts();
    getCategories().then((res)=>{
      setCategories(res.data)
    })
    
  }, []);

  // Delay the request to minimize requests while the user is typing
  useEffect(() => {
    if(text==""){
      return;
    }
    const delayed =()=> setTimeout(() => {
      fetchProducts({ query: text });
    }, 50);
    delayed()
    // Cleanup the timeout on component unmount
  }, [text]);
  useEffect(()=>{
    if(price==0){
      return;
    }
    fetchProducts({price})

  },[ok])
// load-products based on categories :)
const showCategories = () =>
  categories.map((c) => (
    <div key={c._id}>
      <Checkbox onChange={handleCheck} id={c._id} value={c._id} name="category">{c.name}</Checkbox>
      <br />
    </div>
  ));



 

  return (
    <div className="shop-container">
    <div className="search-filter">
      <h1>Search by...</h1>
      {/* Your search filter content */}
      <Menu mode="inline">
        {/* price */}
        <SubMenu key="1" title="Price range">
          <div className="slider-container">
            <Slider
              range
              max="100000"
              value={price}
              onChange={handleSlider}
            />
            <div>
              ₹{price[0]} - ₹{price[1]}
            </div>
          </div>
          {/* categories */}
        </SubMenu>
        <SubMenu key="2" title="categories">
          
           {/* {JSON.stringify(categories)} for checking purposes */} 
           {showCategories()}
          
        </SubMenu>
      </Menu>
    </div>

    {loading ? (
      <div>Loading...</div>
    ) : (
        <div>
            <div className="products-header" >fetched {products.length} Products</div>
             <div className="products">
      
      {products.map((p, index) => (
        <div key={index} className="product-details">
          <ProductCard product={p}></ProductCard>
        </div>
      ))}
    </div>
        </div>
     
    )}
  </div>
  );
};

export default Shop;
