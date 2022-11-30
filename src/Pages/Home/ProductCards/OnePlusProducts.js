import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, {  useState } from 'react';
import OnePlusBookingModal from '../../OnePlusBookingModal/OnePlusBookingModal';
import {DayPicker}from 'react-day-picker';
import OnePlusProduct from './OnePlusProduct'; 

const OnePlusProducts = () => {
   // const [services, setServices]= useState([]);
   const [selectedDate, setSelectedDate]=useState(new Date())
    const [oneplus,setOnePlus]=useState(null)

    const date = format(selectedDate, 'PP');

    const {data:services=[], refetch}= useQuery({
        queryKey: ['oneplusservice', date],
        queryFn: ()=> fetch(`https://final-assignment-teal.vercel.app/oneplusservice?date=${date}`)
        .then(res=>res.json())
    })

    // useEffect(()=>{
    //     fetch('https://final-assignment-teal.vercel.app/oneplusservice')
    //     .then(res=>res.json())
    //     .then (data=>setServices(data))
    // },[services])

    return (
        <div>

           <div className='text-center mb-4'>
              <p className='text-5xl  font-semibold text-orange-600'>Oneplus Resale  Product</p>
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
               services.map(service=> <OnePlusProduct
                   key={service._id}
                    service={service}
                      setOnePlus={setOnePlus}
                      selectedDate={selectedDate}
                      setSelectedDate={setSelectedDate}
                     ></OnePlusProduct>)

                     
                        }   
        </div>

               {
                   
                   oneplus &&
                    <OnePlusBookingModal
                    oneplus={oneplus}
                    setOnePlus={setOnePlus}
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                    refetch={refetch}
                    ></OnePlusBookingModal>

               }

        </div>


       
   
    );
};

export default OnePlusProducts;