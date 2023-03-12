function travelTime(array) {
    let destinations = {};

    for (let line of array) {
        let [country, town, travelCost] = line.split(" > ");

        if (!destinations.hasOwnProperty(country)) {
            destinations[country] = new Map;
            if (!destinations[country].has(town)) {
                destinations[country].set(town, travelCost);

            }
        } else {
            if (!destinations[country].has(town)) {
                destinations[country].set(town, travelCost);

            } else {
                let cost = destinations[country].get(town);
                if (cost < travelCost) {
                    destinations[country].set(town, cost);
                } else {
                    destinations[country].set(town, travelCost);
                }
            }
        }
    }

    let sortedCountries = Array.from(Object.entries(destinations)).sort((a, b) => {
        return a[0].localeCompare(b[0])
    });

    for (let [country,towns] of sortedCountries) {
        let sortedTowns = Array.from(towns).sort((a,b) => a[1] - b[1]);
        let output = `${country} -> `;

        for (let [town, price] of sortedTowns){
            output += `${town} -> ${price} `;
        }
        console.log(output);
    }
}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);

travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
]
)