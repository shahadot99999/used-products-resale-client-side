import React from 'react';

const XiaomiProduct = ({service}) => {
    const {img,title, location, resaleprice, orginalprice,useyear, postdate, sellername, sellerverification}=service;
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
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
   
    </div>
  </div>
</div>
    );
};

export default XiaomiProduct;