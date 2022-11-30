
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Loading/Loading';

const ManageProducts = () => {
    const {data: products, isLoading}= useQuery({
        queryKey: ['products'],
        queryFn: async()=>{
            try{
                const res = await fetch('https://final-assignment-teal.vercel.app/products', {
                    headers:{
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                const data = await res.json();
                return data;
            }
            catch(error){

            }
        }
    })

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl'>Manage Products: {products?.length}</h2>

            <div className="overflow-x-auto">
  <table className="table w-full">
 
    <thead>
      <tr>
        <th></th>
        <th>Avator</th>
        <th>Name</th>
        <th>Price</th>
        <th>Quality</th>
        <th>mobile Number</th>
        <th>Location</th>
        <th>Description</th>
        <th>Year</th>
      </tr>
    </thead>
    <tbody>
    
      {
        products.map((product, i)=><tr key={product._id} className="hover">
        <th>{i+1}</th>
        <td>
        <div className="avator ">
  <div className="w-24 ">
    <img src={product.image} alt=" " />
  </div>
</div>
        </td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.quality}</td>
        <td>{product.mobilenumber}</td>
        <td>{product.location}</td>
        <td>{product.description}</td>
        <td>{product.year}</td>
        <td><button className="btn btn-sm btn-warning">Add Product</button></td>
 
      </tr>)
      }
     
    </tbody>
  </table>
</div>

        </div>
    );
};

export default ManageProducts;