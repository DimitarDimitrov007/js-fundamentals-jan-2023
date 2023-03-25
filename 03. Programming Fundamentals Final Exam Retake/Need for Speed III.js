function Need4Speed(array) {
    let n = array.shift();
    let collection = {};
    for (let i = 0; i < n; i++) {
        let currentLine = array[i];
        let [car, mileage, fuel] = currentLine.split("|");

        collection[car] = {
            mileage: mileage,
            fuel: fuel,
        }
    }

    for (let i = n; i < array.length; i++) {
        let currentLine = array[i];

        if (currentLine === "Stop") {
            break;
        }

        let [command, car, distanceFuelKm, fuel] = currentLine.split(" : ");

        switch (command) {
            case "Drive":
                if(collection[car].fuel >= fuel){
                    collection[car].mileage = Number(collection[car].mileage) + Number(distanceFuelKm);
                    collection[car].fuel -= Number(fuel);
                    console.log(`${car} driven for ${distanceFuelKm} kilometers. ${fuel} liters of fuel consumed.`);
                }else{
                    console.log("Not enough fuel to make that ride");

                }

                if(collection[car].mileage >= 100000){
                    console.log(`Time to sell the ${car}!`);
                    delete collection[car];
                }
                break;
            case "Refuel":
                let fuelNeeded = 75 - collection[car].fuel;
                
                if(collection[car].fuel + Number(distanceFuelKm) > 75){
                    
                    collection[car].fuel = 75;
                    console.log(`${car} refueled with ${fuelNeeded} liters`);
                    

                }else{
                    collection[car].fuel += Number(distanceFuelKm);
                    console.log(`${car} refueled with ${distanceFuelKm} liters`);

                }
                break;
            case "Revert":
                collection[car].mileage -= Number(distanceFuelKm);
                if(collection[car].mileage < 10000){
                    collection[car].mileage = 10000;

                }else{
                    console.log(`${car} mileage decreased by ${distanceFuelKm} kilometers`);

                }
                break;
        }

    }

    for(let car in collection){
        console.log(`${car} -> Mileage: ${collection[car].mileage} kms, Fuel in the tank: ${collection[car].fuel} lt.`);

    }
}
Need4Speed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
  ]
  
  )