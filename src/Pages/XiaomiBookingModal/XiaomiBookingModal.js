import React from 'react';

const XiaomiBookingModal = ({xiaomi, setXiaomi}) => {

    const {title, resaleprice, slots} =xiaomi;

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        console.log(slot, email, name, phone);
        
        const booking = {
           
           user: name,
         
            slot,
            email,
            phone
        }
        console.log(booking);
        setXiaomi(null);
    }
    return (
        <>
            <input type="checkbox" id="apple-booking-modal" className="modal-toggle" />
  <div className="modal">
    <div className="modal-box relative">
    <label htmlFor="apple-booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{title}</h3>
    <form  onSubmit={handleBooking} className='grid grid-cols-1 gap-2 mt-3'>
    <input type="text" value={resaleprice} className="input w-full " />
    <select name="slot" className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>
    <input name="name" type="name" placeholder="Your Name" className="input w-full " />
    <input name="email" type="email" placeholder="Email Adress" className="input w-full " />
    <input name="phone" type="phone" placeholder="Phone Number" className="input w-full " />
    <br/>
    <input className='btn btn-accent w-full ' type="submit" value="submit" />
    </form>
    
  </div>
</div>  
        </>
    );
};

export default XiaomiBookingModal;