// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
console.log(fromEuroToDollar(1))

const fromDollarToYen = function(valueInDollar) {
    
    let valueinYen = valueInDollar * 156.5;
    return valueinYen;
}
console.log(fromDollarToYen(4))

const fromYenToPound = function(valueinYen) {
    let valueinPound = valueinYen * 0.0052;
    return valueinPound;
}

console.log(fromYenToPound(500))


module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }