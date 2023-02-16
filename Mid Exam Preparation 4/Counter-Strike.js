function counterStrike(array) {
    let wonBattles = 0;
    let energy = Number(array.shift());
    let index = 0;
    let currentDistance = Number(array[index]);
    index++;

    while(currentDistance !== "End of battle"){
        if(energy >= currentDistance){
            wonBattles++;
            if(wonBattles % 3 === 0){
                energy += wonBattles;
            }
            energy -= currentDistance;
        }else{
            console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${energy} energy`);
            return;
        }

        currentDistance = Number(array[index]);
        index ++;
    }

    console.log(`Won battles: ${wonBattles}. Energy left: ${energy}`);
}
counterStrike(["200",
"54",
"14",
"28",
"13",
"End of battle"])
;
