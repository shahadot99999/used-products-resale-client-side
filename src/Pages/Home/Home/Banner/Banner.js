import React from 'react';
//import chair from '../../../assets/images/chair.png';
import cashify from '../../../../assets/images/cashify.jpg'
// import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={cashify} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Sell Old Phone</h1>
                    <p className="py-6">My cell phone is my best friend. It's my lifeline to the outside world.To be happy in this world, first you need a cell phone and then you need an airplane. Then you're truly wireless.</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;