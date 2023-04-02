function wildZoo(array) {
    let animals = {};
    let areas = {};

    for (let line of array) {

        if (line === "EndDay") {
            break;
        }

        line = line.split(": ");
        let command = line[0];
        let [animal, foodNeededFood, area] = line[1].split("-");

        switch (command) {
            case "Add":
                if (!animals.hasOwnProperty(animal)) {
                    animals[animal] = Number(foodNeededFood);

                } else {
                    animals[animal] += Number(foodNeededFood);
                }

                if (!areas.hasOwnProperty(area)) {
                    areas[area] = new Set;
                    areas[area].add(animal);
                } else {
                    areas[area].add(animal);
                }

                break;
            case "Feed":
                if (animals.hasOwnProperty(animal)) {
                    animals[animal] -= Number(foodNeededFood);
                    if (animals[animal] <= 0) {
                        console.log(`${animal} was successfully fed`);
                        delete animals[animal];
                        let keys = Object.keys(areas);

                        for(let area of keys){
                            if(areas[area].has(animal)){
                                areas[area].delete(animal);
                            }
                        }
                    }
                }
                break;

        }
    }

    console.log("Animals:");

    let entries = Object.entries(animals);

    for (let [animal, food] of entries) {
        console.log(` ${animal} -> ${food}g`);
    }

    console.log("Areas with hungry animals:");

    let areaEntries = Object.entries(areas);

    for (let [area, set] of areaEntries) {
        if (set.size > 0) {
            console.log(` ${area}: ${set.size} `);
        }
    }
}
/*wildZoo([
    "Add: Adam-4500-ByTheCreek",
    "Add: Maya-7600-WaterfallArea",
    "Add: Maya-1230-WaterfallArea",
    "Feed: Jamie-2000",
    "EndDay"
]); */

wildZoo([
    "Add: Jamie-600-WaterfallArea",
    "Add: Maya-6570-WaterfallArea",
    "Add: Adam-4500-ByTheCreek",
    "Add: Bobbie-6570-WaterfallArea",
    "Feed: Jamie-2000",
    "Feed: Adam-2000",
    "Feed: Adam-2500",
    "EndDay"
]);
