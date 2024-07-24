import React from 'react';
import { formatPrice } from '../formatPrice';

const TvPrice = ({price}) => {
    const formattedPrice = formatPrice(price);

    return (
        <div>
            <p>{formattedPrice}</p>
        </div>
    )
}
export default TvPrice;