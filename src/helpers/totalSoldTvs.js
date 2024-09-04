//Opdracht 1a: schrijf een helperfunctie die berekent hoeveel tv's er zijn verkocht:
export function calculateTotalSoldTvs(inventory) {
    return inventory.reduce((total, tv) => total + tv.sold, 0);
}

//Opdracht 1e: helperfunctie die berekent hoeveel tv's er nog verkocht moeten worden.
export function calculateRemainingTvs(inventory) {
    const totalSold = calculateTotalSoldTvs(inventory);
    const totalStock = inventory.reduce((total, tv) => total + tv.originalStock, 0);
    return totalStock - totalSold;
}
