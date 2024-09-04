//Opdracht 3: zorg ervoor dat wanneer een gebruiker op de 'Goedkoopste eerst'knop klikt, de inventory-array wordt gesorteerd op prijs van laag naar hoog.
import { inventory } from '../inventory.js';

const SortByPrice = () => {

    //Functie om de inventory array te sorteren obv prijs
    const sortByPrice = () => {
        const sortedInventory = [...inventory].sort((a,b) => a.price - b.price);//Sorteer op 'price'
        console.log(sortedInventory);
    };

    return (
        <div>
            <button onClick={sortByPrice}>Goedkoopste eerst</button>
        </div>
    );
};
export default SortByPrice;