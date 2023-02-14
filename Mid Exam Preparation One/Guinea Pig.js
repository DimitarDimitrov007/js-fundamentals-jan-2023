function guineaPig(array){
    let daysCounter = 0;
    let totalFood = Number(array[0]);
    let totalHay = Number(array[1]);
    let totalCover = Number((array[2]));
    let pigWeight = Number(array[3]);

    while(daysCounter < 30){
        daysCounter++;
        totalFood -= 0.3;
        if(daysCounter % 2 === 0){
           totalHay -= totalFood * 0.05;
        }

        if(daysCounter % 3 === 0){
            totalCover -= pigWeight / 3;
        }

        if(totalFood > 0 && totalHay > 0 && totalCover > 0){
            continue;
        }else{
            console.log("Merry must go to the pet store!");
            return;
        }
    }

    console.log(`Everything is fine! Puppy is happy! Food: ${totalFood.toFixed(2)}, Hay: ${totalHay.toFixed(2)}, Cover: ${totalCover.toFixed(2)}.`);
}
guineaPig((["9","5","5.2","1"]));