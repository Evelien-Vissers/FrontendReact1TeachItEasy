//Opdracht 2d: gebruik de helperfuncties om de informatie van de bestverkochte tv op de pagina weer te geven (inclusief afbeelding):
import { bestSellingTv } from '../inventory';
import { generateTvName } from '../helpers/generateTvName.js';
import { formatPrice } from '../helpers/formatPrice.js';
import { formatScreenSizes } from '../helpers/formatScreenSizes.js';

const BestSellingTv = () => {
    const tvName = generateTvName(bestSellingTv);
    const tvPrice = formatPrice(bestSellingTv.price);
    const tvScreenSizes = formatScreenSizes(bestSellingTv.availableSizes);

    return (
        <div>
            <h2>{tvName}</h2>
            <p>Price: {tvPrice}</p>
            <p>Available sizes: {tvScreenSizes}</p>
            <img src={bestSellingTv.sourceImg} alt={`${tvName}`} />
        </div>
    )
}
export default BestSellingTv;