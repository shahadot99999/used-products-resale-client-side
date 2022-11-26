import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyProducts = () => {

    const {user}= useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const {data:bookings=[]}=useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async()=>{
            const res = await fetch(url);
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
      </tr>
    </thead>
    <tbody>

     {
        bookings.map((booking, i)=> <tr key={booking._id}>
        <th>{i+1}</th>
        <td>{booking.productname}</td>
        <td>{booking.price}</td>
        <td>{booking.user}</td>
        <td>{booking.email}</td>
        <td>{booking.phone}</td>
        </tr>)
     }
    
     
    </tbody>
  </table>
</div>      
        </div>
    );
};

export default MyProducts;