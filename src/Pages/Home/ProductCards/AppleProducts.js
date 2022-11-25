import React, { useEffect, useState } from 'react';
import AppleBookingModal from '../../AppleBookingModal/AppleBookingModal';
import AppleProduct from './AppleProduct';

const AppleProducts = () => {
    const [services, setServices]= useState([]);

    const [apple, setApple]= useState(null)

    useEffect(()=>{
        fetch('appleservices.json')
        .then(res=>res.json())
        .then (data=>setServices(data))
    },[services])



    return (
        <div>
            <div className='text-center mb-4'>
            <p className='text-5xl  font-semibold text-orange-600'>Apple Resale  Product</p>
           
                
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                   services.map(service=> <AppleProduct
                       key={service._id}
                        service={service}
                        setApple={setApple}
                        
                         ></AppleProduct>)
                            }   
            </div>
            {
                apple && 
                <AppleBookingModal
            apple={apple}
            setApple={setApple}
            ></AppleBookingModal>
            }
        </div>
    );
};




export default AppleProducts;


