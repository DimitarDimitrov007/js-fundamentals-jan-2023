function blackFlag(array){
    let days = Number(array[0]);
    let dailyPlunder = Number(array[1]);
    let goal = Number(array[2]);
    let plunderSoFar = 0;
    
    for(let i = 1; i <= days; i++){
        plunderSoFar += dailyPlunder;
        if(i % 3 === 0){
            plunderSoFar += dailyPlunder / 2;
        }

        if(i % 5 === 0){
            plunderSoFar *= 0.7;
        }

    }

    if(plunderSoFar >= goal){
        console.log(`Ahoy! ${plunderSoFar.toFixed(2)} plunder gained.`);
    }else{
        let percentage = (plunderSoFar / goal) * 100;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}
blackFlag(["10",
"20",
"380"]);