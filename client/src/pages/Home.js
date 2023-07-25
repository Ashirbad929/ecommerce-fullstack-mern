import React from 'react';
import { getProducts } from '../ApiFunctions/product';
import ProductCard from '../components/card/ProductCard';
import '../css/home.css';
import Writer from '../components/Writer';
import NewArrivals from '../components/home/NewArrivals';
import BestSellers from '../components/home/BestSellers';
import CategoryList from '../components/category/CategoryList';
import SubList from '../components/sub/SubList';
import { Layout } from 'antd';
import Footer from './Footer';

const { Content } = Layout;

const Home = () => {
  return (
    <Layout className="home-container">
      <div className="writer-container">
        <Writer text={['Fetch your favorites', 'Explore here']}  />
      </div>
      <Content>
        <div>
          <h1 className='latest-products'>Latest products</h1>
          <NewArrivals/>
        </div>

        <div>
          <h1 className='latest-products'>Best sellers</h1>
          <BestSellers></BestSellers>
        </div>
        <hr />
        <div className='branded-products'>
          <CategoryList />
          <hr />
          <SubList/>
        </div>
      </Content>
      <Footer /> 
    </Layout>
  );
}

export default Home;
