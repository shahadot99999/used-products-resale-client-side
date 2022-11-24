import React from 'react';

const AppleProduct = ({service}) => {
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

export default AppleProduct;

// {/* <div className="card card-compact w-96 bg-base-100 shadow-xl">
//         <figure><img src={img} alt=" " /></figure>
//         <div className="card-body">
//             <h2 className="card-title">{title}</h2>
//             <p className='text-2xl text-orange-600 font-semibold'>location: {location}</p> 
//             <p className='text-2xl text-orange-600 font-semibold'>resaleprice: {resaleprice}</p> 
//             <p className='text-2xl text-orange-600 font-semibold'>orginalprice: {orginalprice}</p> 
//             <p className='text-2xl text-orange-600 font-semibold'>useyear: {useyear}</p> 
//             <p className='text-2xl text-orange-600 font-semibold'>postdate: {postdate}</p> 
//             <p className='text-2xl text-orange-600 font-semibold'>sellername: {sellername}</p> 
//             <p className='text-2xl text-orange-600 font-semibold'>sellerverification: {sellerverification}</p> 
            
//             <div className="card-actions justify-end">
//                 <button className="btn btn-primary">Buy Now</button>
//             </div>
//         </div>
//     </div> */}