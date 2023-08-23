const min = 25;
const km = 11.5;

let calculoMin = 0;

if (min <= 20) {
    calculoMin = min * 50
} else {
    calculoMin = (20 * 50) + ((min - 20) * 30)
}

let calculoKm = 0;

if (km <= 10) {
    calculoKm = km * 70
} else {
    calculoKm = (10 * 70) + ((km - 10) * 50)
}

console.log(calculoKm + calculoMin);

