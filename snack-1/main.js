const bikes = [
    {
        name: "Torpado",
        weight: {
            value: 10,
            unit: "kg",
        },
    },
    {
        name: "Between",
        weight: {
            value: 15,
            unit: "kg",
        },
    },
    {
        name: "Ktm",
        weight: {
            value: 13,
            unit: "kg",
        },
    },
    {
        name: "Kawasaki",
        weight: {
            value: 8,
            unit: "kg",
        },
    },
    {
        name: "Bianchi",
        weight: {
            value: 18,
            unit: "kg",
        },
    },
];

const bikesWeight = [];

for (let i = 0; i < bikes.length; i++) {
    bikesWeight.push(bikes[i].weight.value);
}

const lightestBike = bikes.reduce((min, current) => {
    return current.weight.value < min.weight.value ? current : min;
});

console.log("La bici più leggera è:", lightestBike);
