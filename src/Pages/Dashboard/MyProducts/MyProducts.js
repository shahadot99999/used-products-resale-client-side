//import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyProducts = () => {

    const {user}= useContext(AuthContext);

    const url = `https://final-assignment-teal.vercel.app/bookings?email=${user?.email}`;

    const {data:bookings=[]}=useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async()=>{
            const res = await fetch(url, {
              headers: {
                  authorization: `bearer ${localStorage.getItem('accessToken')}`
              }
            });
            const data = await res.json();
            
            return data;
        }
    })

    return (
        <div>
            <h2 className='text-2xl mb-4'>My Product</h2>

            <div className="overflow-x-auto">
         <table className="table w-full">
  
    <thead>
      <tr>
        <th></th>
        <th>Product Name</th>
        <th>Price</th>
        <th>User</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>

     {
      bookings &&
        bookings?.map((booking, i)=> <tr key={booking._id}>
        <th>{i+1}</th>
        <td>{booking.productname}</td>
        <td>{booking.price}</td>
        <td>{booking.user}</td>
        <td>{booking.email}</td>
        <td>{booking.phone}</td>
        <td>
          {
            booking &&
            booking?.price && !booking.paid &&<Link 
            to={`/dashboard/payment/${booking._id}`}
            >
            <button className="btn btn-sm btn-secondary"
            >Pay</button>
            </Link>
          }
            {
            booking.price && booking.paid && <span className='text-success'>paid</span>
           
          }
          </td>
        </tr>)
     }
    
     
    </tbody>
  </table>
</div>      
        </div>
    );
};

export default MyProducts;