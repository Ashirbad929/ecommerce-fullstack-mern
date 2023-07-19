import React, { useEffect, useState } from 'react';
import { getProducts } from '../ApiFunctions/product';
import ProductCard from '../components/card/ProductCard';
import '../css/home.css';
import Writer from '../components/Writer';
import NewArrivals from '../components/home/NewArrivals';
import BestSellers from '../components/home/BestSellers';
const Home = () => {


  return (
    <div className="home-container">
      <div className="writer-container">
        <Writer text={['Fetch your favorites', 'Explore here']}  />
      </div>
      <div>
      <h1 className='latest-products'>Latest products</h1>
      <NewArrivals/>
      </div>
        
      

     <div>
     <h1 className='latest-products'>Best sellers</h1>
      <BestSellers></BestSellers>
     </div>
     

    </div>
  );
}

export default Home;
