//Deel 2 TechItEasy - Opdracht 2b, 2c

import {inventory} from "../inventory.js";
import {generateTvName} from "../helpers/generateTvName.js";
import {formatPrice} from "../helpers/formatPrice.js";
import {formatScreenSizes} from "../helpers/formatScreenSizes.js";
import checkIcon from '../assets/check.png'
import minusIcon from '../assets/minus.png'

const AllTvs = () => {
    return (
        <div>
            {inventory.map((tv) => {
                const tvName = generateTvName(tv); // Genereer TV naam
                const tvPrice = formatPrice(tv.price); // Format de prijs
                const tvScreenSizes = formatScreenSizes(tv.availableSizes); // Format de schermgrootte

                return (
                    <div key={tv.type} className="tv-item">
                        <h2>{tvName}</h2>
                        <p>Price: {tvPrice}</p>
                        <p>Available sizes: {tvScreenSizes}</p>
                        <img src={tv.sourceImg} alt={`${tvName}`} />

                        <h3>Opties:</h3>
                        <ul>
                            {tv.options.map((option, index) => (
                                <li key={index}>
                                    <img
                                    src={option.applicable ? checkIcon : minusIcon} // Gebruik juiste afbeelding
                                    alt={option.applicable ? "Check icon" : "Minus icon"} //Voeg alt-tekst toe
                                    className="icon" />
                                    {option.name}</li> //Opdracht 2c: toon de optie naam
                            ))}
                        </ul>
                    </div>
                );
            })}
        </div>
    );
};
export default AllTvs;