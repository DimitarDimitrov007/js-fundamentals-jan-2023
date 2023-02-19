function theAngryCat(input,startingPoint,type){
    let items = input

    let leftSum = 0;
    let rightSum = 0;

    for(let i = startingPoint + 1; i < items.length; i++){
        if(type === "cheap"){
            if(items[i] < items[startingPoint]){
                rightSum += items[i];
            }

        }else if(type === "expensive"){
            if(items[i] >= items[startingPoint]){
                rightSum += items[i];
            }
        }
    }


    for(let i = 0; i < startingPoint; i++){
        if(type === "cheap"){
            if(items[i] < items[startingPoint]){
                leftSum += items[i];
            }

        }else if(type === "expensive"){
            if(items[i] >= items[startingPoint]){
                leftSum += items[i];
            }
        }
    }


    if(leftSum >=rightSum){
        console.log(`Left - ${leftSum}`);
    }else{
        console.log(`Right - ${rightSum}`);
    }
}
theAngryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3],
    7,
    "expensive")
    
    
    