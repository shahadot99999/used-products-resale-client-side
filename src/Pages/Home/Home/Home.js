import React from 'react';
import Outstanding from '../../Shared/Outstanding/Outstanding';
import ProductCards from '../ProductCards/ProductCards';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div className='mx-4'>
          <Banner></Banner>
          <Outstanding></Outstanding>
          <ProductCards></ProductCards>
        </div>
    );
};

export default Home;