function huntingGames(array){
    let totalDays = Number(array.shift());
    let players = Number(array.shift());
    let energy = Number(array.shift());
    let waterPerDay = Number(array.shift());
    let foodPerDay = Number(array.shift());
    let lostEnergy = Number(array.shift());
    let passedDays = 0;

    let totalFoodNeeded = totalDays * players * foodPerDay;
    let totalWaterNeeded = totalDays * players * waterPerDay;

    while(passedDays < totalDays){
        passedDays ++;
        energy -= lostEnergy;
        if(energy <= 0){
            console.log(`You will run out of energy. You will be left with ${totalFoodNeeded.toFixed(2)} food and ${totalWaterNeeded.toFixed(2)} water.`);
            return;
        }

        if(passedDays % 2 === 0){
            energy += energy * 0.05;
            totalWaterNeeded -= totalWaterNeeded * 0.3;
        }

        if(passedDays % 3 === 0){
            totalFoodNeeded -= (totalFoodNeeded / players);
            energy += energy * 0.1;
        }

        lostEnergy = Number(array.shift());
    }
    console.log(`You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`);
}
huntingGames(["10",
"7",
"5035.5",
"11.3",
"7.2",
"942.3",
"500.57",
"520.68",
"540.87",
"505.99",
"630.3",
"784.20",
"321.21",
"456.8",
"330"])
;




    


