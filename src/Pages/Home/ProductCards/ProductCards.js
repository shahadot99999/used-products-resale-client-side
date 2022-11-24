import React from 'react';



const ProductCards = () => {

   
    return (
     
        <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
         <div className="card-body">
               <a href="/apple"  alt="" className="card-title card text-white p-6 md:card-side shadow-xl bg-gradient-to-r from-primary to-secondary" >Apple Resale Product </a>                 
           </div>
           <div className="card-body">
               <a href="/xoami" alt=" " className="card-title card text-white p-6 md:card-side shadow-xl bg-accent" >Xiaomi Resale Product</a>  
           </div>

           <div className="card-body">
               <a href="/oneplus"  alt=" " className="card-title card text-white p-6 md:card-side shadow-xl bg-gradient-to-r from-primary to-secondary" >One Plus Resale Product</a>  
           </div>
    </div>
       


    );
};

export default ProductCards;