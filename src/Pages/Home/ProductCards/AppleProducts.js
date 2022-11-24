import React, { useEffect, useState } from 'react';
import AppleProduct from './AppleProduct';

const AppleProducts = () => {
    const [services, setServices]= useState([]);
    useEffect(()=>{
        fetch('appleservices.json')
        .then(res=>res.json())
        .then (data=>setServices(data))
    },[services])



    return (
        <div>
            <div className='text-center mb-4'>
            <p className='text-5xl  font-semibold text-orange-600'>Apple Resale  Product</p>
            <h2>Services: {services.length}</h2>
                
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                   services.map(service=> <AppleProduct
                       key={service._id}
                        service={service}
                         ></AppleProduct>)
                            }   
            </div>
        </div>
    );
};




export default AppleProducts;


