import React, { useEffect, useState } from 'react';
import XiaomiBookingModal from '../../XiaomiBookingModal/XiaomiBookingModal';
import XiaomiProduct from './XiaomiProduct';

const XiaomiProducts = () => {

    const [services, setServices]= useState([]);

    const [xiaomi, setXiaomi]= useState(null)

    useEffect(()=>{
        fetch('xiaomiservices.json')
        .then(res=>res.json())
        .then (data=>setServices(data))
    },[services])
    return (
        <div>
            <div className='text-center mb-4'>
            <p className='text-5xl  font-semibold text-orange-600'>Xiaomi Resale  Product</p>
            <h2>Services: {services.length}</h2>
                
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                   services.map(service=> <XiaomiProduct
                       key={service._id}
                        service={service}
                        setXiaomi={setXiaomi}
                         ></XiaomiProduct>)
                            }   
            </div>
            { 
                xiaomi &&
                <XiaomiBookingModal
                xiaomi={xiaomi}
                setXiaomi={setXiaomi}
                ></XiaomiBookingModal>
            
            }


        </div>
    );
};

export default XiaomiProducts;