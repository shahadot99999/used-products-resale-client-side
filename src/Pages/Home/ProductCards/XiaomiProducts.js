import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import XiaomiBookingModal from '../../XiaomiBookingModal/XiaomiBookingModal';
import XiaomiProduct from './XiaomiProduct';

const XiaomiProducts = () => {

    //const [services, setServices]= useState([]);
   
    const [selectedDate, setSelectedDate]=useState(new Date())

   const date = format(selectedDate, 'PP');
    
    const [xiaomi, setXiaomi]= useState(null)

    const {data:services=[], refetch}= useQuery({
        queryKey: ['xiaomiservices'],
        queryFn: ()=> fetch(`https://final-assignment-teal.vercel.app/xiaomiservices?date=${date}`)
        .then(res=>res.json())
    })


    // useEffect(()=>{
    //     fetch('https://final-assignment-teal.vercel.app/xiaomiservices')
    //     .then(res=>res.json())
    //     .then (data=>setServices(data))
    // },[services])
    
    return (
        <div>
            <div className='text-center mb-4'>
            <p className='text-5xl  font-semibold text-orange-600'>Xiaomi Resale  Product</p>
            <h2>Services: {services.length}</h2>


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
                   services.map(service=> <XiaomiProduct
                       key={service._id}
                        service={service}
                        setXiaomi={setXiaomi}
                        selectedDate={selectedDate}
                        setSelectedDate={setSelectedDate}
                         ></XiaomiProduct>)
                            }   
            </div>
            { 
                xiaomi &&
                <XiaomiBookingModal
                xiaomi={xiaomi}
                setXiaomi={setXiaomi}
                selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            refetch={refetch}

                ></XiaomiBookingModal>
            
            }


        </div>
    );
};

export default XiaomiProducts;