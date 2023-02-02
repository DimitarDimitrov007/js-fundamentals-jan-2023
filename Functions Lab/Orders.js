function orders(item,quantity){
    let price = 0;
    if(item === "coffee"){
        price = 1.50;
    }else if(item === "water"){
        price = 1.00;
    }else if(item === "coke"){
        price = 1.40;
    }else{
        price = 2.00;
    }

    let total = price * quantity;

    return total.toFixed(2);

}
let finalResult = orders("coffee", 2);
console.log(finalResult);