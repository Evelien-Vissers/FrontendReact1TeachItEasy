//Deel 2 TechItEasy: Opdracht 2a - gebruik een array-methode om alle tv-merken in een lijst op de pagina weer te geven.
import {inventory} from '../inventory.js';

const TvBrands = () => {
    //map-methode wordt gebruik om alle tv-merken op te halen
    const tvBrands = inventory.map(tv => tv.brand);

    return (
        <div>
            <h3>Verkrijgbare TV-merken:</h3>
            <ul>
                {tvBrands.map((brand, index) => (
                    <li key={index}>{brand}</li>
                ))}
            </ul>
        </div>
    )
}
export default TvBrands;