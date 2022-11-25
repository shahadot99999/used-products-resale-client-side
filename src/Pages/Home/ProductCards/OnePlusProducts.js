import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import OnePlusBookingModal from '../../OnePlusBookingModal/OnePlusBookingModal';
import OnePlusProduct from './OnePlusProduct'; 

const OnePlusProducts = () => {
   // const [services, setServices]= useState([]);

    const [oneplus,setOnePlus]=useState(null)

    const {data:services=[]}= useQuery({
        queryKey: ['oneplusservice'],
        queryFn: ()=> fetch('http://localhost:5000/oneplusservice')
        .then(res=>res.json())
    })

    // useEffect(()=>{
    //     fetch('http://localhost:5000/oneplusservice')
    //     .then(res=>res.json())
    //     .then (data=>setServices(data))
    // },[services])

    return (
        <div>

           <div className='text-center mb-4'>
              <p className='text-5xl  font-semibold text-orange-600'>Oneplus Resale  Product</p>
             <h2>Services: {services.length}</h2>      
        </div>
          <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
               services.map(service=> <OnePlusProduct
                   key={service._id}
                    service={service}
                      setOnePlus={setOnePlus}
                     ></OnePlusProduct>)

                     
                        }   
        </div>

               {
                   
                   oneplus &&
                    <OnePlusBookingModal
                    oneplus={oneplus}
                    setOnePlus={setOnePlus}
                    ></OnePlusBookingModal>

               }

        </div>


       
   
    );
};

export default OnePlusProducts;