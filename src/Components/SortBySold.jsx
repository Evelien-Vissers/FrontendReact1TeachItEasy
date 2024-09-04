//Opdracht 3a: zorg ervoor dat wanneer een gebruiker op de 'Meest verkocht eerst-knop' klikt, de inventory-array wordt gesorteerd op aantal verkochte items van hoog naar laag.

import { inventory } from '../inventory.js';

const SortBySold = () => {

    //Functie om de inventory array te sorteren obv aantal verkochte items van hoog naar laag. NB: deze functie maakt een kopie van de inventory met [...inventory], om de originele array niet te muteren.
const sortBySold = () => {
    const sortedInventory = [...inventory].sort((a, b) => b.sold - a.sold);
console.log(sortedInventory);
};

return (
    <div>
        <button onClick={sortBySold}>Meest verkocht eerst</button>
    </div>
);
};
export default SortBySold;