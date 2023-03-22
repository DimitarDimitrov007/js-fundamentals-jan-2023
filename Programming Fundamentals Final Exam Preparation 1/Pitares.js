function pirates(array) {

    let settlement = {};
    let lineIndex = 0;

    for (let line of array) {
        lineIndex++;

        if (line === "Sail") {
            break;
        }

        line = line.split("||");
        let [city, population, gold] = line;

        if (!settlement.hasOwnProperty(city)) {
            settlement[city] = {
                population: Number(population),
                gold: Number(gold),
            };

        } else {
            settlement[city].population += Number(population);
            settlement[city].gold += Number(gold);
        }

    }

    for (let i = lineIndex; lineIndex < array.length; i++) {
        let line = array[i];

        if (line === "End") {
            break;
        }

        line = line.split("=>");
        let [commandName, town, peopleGold, gold] = line;

        switch (commandName) {
            case "Plunder":
                console.log(`${town} plundered! ${gold} gold stolen, ${peopleGold} citizens killed.`);
                settlement[town].population -= Number(peopleGold);
                settlement[town].gold -= Number(gold);

                if(settlement[town].population === 0 || settlement[town].gold === 0 ){
                    delete settlement[town];
                    console.log(`${town} has been wiped off the map!`);

                }
                break;
            case "Prosper":
                if(peopleGold < 0){
                    console.log("Gold added cannot be a negative number!");
                    continue;
                }else{
                    settlement[town].gold += Number(peopleGold);
                    console.log(`${peopleGold} gold added to the city treasury. ${town} now has ${settlement[town].gold} gold.`);
                }
                break;

        }
    }

    let count = Object.keys(settlement);

    

    if(count.length > 0){
        console.log(`Ahoy, Captain! There are ${count.length} wealthy settlements to go to:`);
        for(let city in settlement){
            console.log(`${city} -> Population: ${settlement[city].population} citizens, Gold: ${settlement[city].gold} kg`);
        }

    }else{
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }
}
pirates([
    "Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"
]); 

pirates(["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"])
