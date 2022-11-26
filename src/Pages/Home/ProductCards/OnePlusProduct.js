import React from 'react';

const OnePlusProduct = ({service,setOnePlus, selectedDate, setSelectedDate }) => {
    const {img,title,slots, location, resaleprice, orginalprice,useyear, postdate, sellername, sellerverification}=service;
    return (
      
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>location: {location}</p>
    <p>resaleprice: {resaleprice}</p>
    <p>orginalprice: {orginalprice}</p>
    <p>useyear: {useyear}</p>
    <p>postdate: {postdate}</p>
    <p>sellername: {sellername}</p>
    <p>sellerverification:{sellerverification}</p>
    {/* <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p> */}
    <p>{slots.length} {slots.length > 1 ? 'available' : 'space'}</p>
    <div className="card-actions justify-end">
      
      <label 
      disabled={slots.length === 0}
      htmlFor="apple-booking-modal" 
      className="btn btn-primary text-white"
      onClick={()=>setOnePlus(service)}
      >Order Now</label>
   
    </div>
  </div>
</div>
    );
};

export default OnePlusProduct;