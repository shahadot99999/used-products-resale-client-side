import React from 'react';

const ProductCard = ({card}) => {
    const { name, bgClass } = card;
    return (
        <div className={`card text-white p-6 md:card-side shadow-xl ${bgClass}`}>
           
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
               
            </div>
        </div>
    );
};

export default ProductCard;