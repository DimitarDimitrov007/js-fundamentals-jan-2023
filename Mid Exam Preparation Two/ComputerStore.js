function computerStore(array) {
    let typeOfCustomer = array[array.length - 1];
    let totalSum = 0;

    for(let i = 0; i < array.length - 1; i++){
        let currentPartPrice = Number(array[i]);
        if(currentPartPrice < 0){
            console.log("Invalid price!");
            continue;
        }
        totalSum += currentPartPrice;
    }

    if(totalSum === 0){
        console.log("Invalid order!" );
        return;
    }

    if(typeOfCustomer === "special"){
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${totalSum.toFixed(2)}$`);
        console.log(`Taxes: ${(totalSum * 0.2).toFixed(2)}$`);
        console.log("-----------");
        console.log(`Total price: ${((totalSum + totalSum * 0.2) * 0.9).toFixed(2)}$`);
    }else{
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${totalSum.toFixed(2)}$`);
        console.log(`Taxes: ${(totalSum * 0.2).toFixed(2)}$`);
        console.log("-----------");
        console.log(`Total price: ${(totalSum + totalSum * 0.2).toFixed(2)}$`);
    }
}
computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
    ])
    