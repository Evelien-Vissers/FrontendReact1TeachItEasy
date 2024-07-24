//Opdracht 2c: helpferfunctie die een string genereert voor alle schermgroottes van 1 tv
export function formatScreenSizes(sizes) {
    //Functie om inches naar centimeters om te rekenen
    const inchesToCm = (inches) => (inches * 2.54).toFixed(1);

    //Map de sizes array naar het gewenste formaat
    return sizes.map(size => `${size} inches (${inchesToCm})`).join(' | ');
}