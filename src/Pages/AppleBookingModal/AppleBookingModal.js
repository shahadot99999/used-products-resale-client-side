import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const AppleBookingModal = ({apple, setApple, selectedDate, setSelectedDate, refetch}) => {
    const {title, resaleprice} =apple;

    const date = format(selectedDate, 'PP');

    const {user}= useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
       // const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        console.log( email, name, phone);
        
        const booking = {
            productname:title,
            price: resaleprice,
           booking: date,
           user: name,
           
            email,
            phone
        }


        fetch('https://final-assignment-teal.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setApple(null);
                    toast.success('WelCome for order.');
                    refetch();
                }
                else{
                    toast.error(data.message);
                }
            })


    }
    return (
        <>
            <input type="checkbox" id="apple-booking-modal" className="modal-toggle" />
  <div className="modal">
    <div className="modal-box relative">
    <label htmlFor="apple-booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{title}</h3>
    {/* <p>You have selected date: {format(selectedDate, "PP")}</p> */}
    <form  onSubmit={handleBooking} className='grid grid-cols-1 gap-2 mt-3'>
    <input type="text" value={resaleprice} className="input w-full " />
    <input type="text" disabled value={date} className="input w-full input-bordered " />
    {/* <select name="slot" className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select> */}
    <input name="name" type="name"  defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full " />
    <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Adress" className="input w-full " />
    <input name="phone" type="phone" placeholder="Phone Number" className="input w-full " />

    <br/>
    <input className='btn btn-accent w-full ' type="submit" value="submit" />
    </form>
    
  </div>
</div>  
        </>
    );
};

export default AppleBookingModal;