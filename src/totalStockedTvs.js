//Opdracht 1c: helperfunctie die totale hoeveelheid inkoop tv's berekent
export function calculateTotalStockedTvs (inventory) {
    return inventory.reduce((total, tv) => total + tv.originalStock, 0);
}