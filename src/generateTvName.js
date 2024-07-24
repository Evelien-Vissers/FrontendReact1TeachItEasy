//Opdracht 2a: helperfunctie die een string genereert voor de naam van 1 tv:
export function generateTvName(tv) {
    return `${tv.brand} ${tv.type} - ${tv.name}`;
}