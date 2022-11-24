import React from 'react';
import ProductCard from './ProductCard';

const ProductCards = () => {

    const cardData = [
        {
            id: 1,
            name: 'Apple Resale Product',
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Xiaomi Resale Product',
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'One Plus Resale Product',
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
    ]
    return (
        <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                cardData.map(card => <ProductCard
                    key={card.id}
                    card={card}
                ></ProductCard>)
            }
        </div>
    );
};

export default ProductCards;