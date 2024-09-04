//Opdracht 3c: zorg ervoor dat wanneer een gebruiker op 'Meest geschikt voor sport eerst-knop' klikt, de inventory-array wordt gesorteerd op verversingssnelheid van hoog naar laag.
import { inventory } from '../inventory';

const SortByRefreshRate = () => {
    //Functie om de inventory array te sorteren obv verversingssnelheid:
    const sortByRefreshRate = () => {
        const sortedInventory = [...inventory].sort((a, b) => b.refreshRate - a.refreshRate); //Sorteer op refreshRate
        console.log(sortedInventory);
    };
    return (
        <div>
            <button onClick={sortByRefreshRate}>Meest geschikt voor sport eerst</button>
        </div>
    );
};
export default SortByRefreshRate;