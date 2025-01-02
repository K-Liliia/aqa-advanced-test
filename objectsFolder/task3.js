let car1 = {
    brand: "BMW",
    model: "Z8",
    year: 2000
}

let car2 = {
    brand: "BMW",
    model: "Z4",
    owner: "Patricia Cornwell"
}

let car3 = { ...car1, ...car2};
console.log(car3);