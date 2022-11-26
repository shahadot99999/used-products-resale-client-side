import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import AppleBookingModal from '../../AppleBookingModal/AppleBookingModal';
import AppleProduct from './AppleProduct';
import {DayPicker}from 'react-day-picker';
import {format} from 'date-fns';

const AppleProducts = () => {
   //  const [services, setServices]= useState([]);

   const [selectedDate, setSelectedDate]=useState(new Date())

   const date = format(selectedDate, 'PP');

    const [apple, setApple]= useState(null);

    const {data:services=[], refetch}= useQuery({
        queryKey: ['appleservices', date],
        queryFn: ()=> fetch(`http://localhost:5000/appleservices?date=${date}`)
        .then(res=>res.json())
    })

    // useEffect(()=>{
    //     fetch('http://localhost:5000/appleservices')
    //     .then(res=>res.json())
    //     .then (data=>setServices(data))
    // },[services])



    return (
        <div>
            <div className='text-center mb-4'>
            <p className='text-5xl  font-semibold text-orange-600'>Apple Resale  Product</p>
            
            <div className='mr-6 sm:w-full'>
                        <DayPicker 
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>

                    <p>You have selected date: {format(selectedDate, "PP")}</p>
                
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                   services.map(service=> <AppleProduct
                       key={service._id}
                        service={service}
                        setApple={setApple}
                        selectedDate={selectedDate}
                        setSelectedDate={setSelectedDate}
                         ></AppleProduct>)
                            }   
            </div>
            {
                apple && 
                <AppleBookingModal
            apple={apple}
            setApple={setApple}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            refetch={refetch}
            ></AppleBookingModal>
            }
        </div>
    );
};




export default AppleProducts;


