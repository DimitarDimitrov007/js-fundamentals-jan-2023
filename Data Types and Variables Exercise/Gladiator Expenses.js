function gladiatorExpenses(lostFights,helmetPrice,swordPrice,shiedPrice,armorPrice){
    let fightsPassed = 0;
    let expenses = 0;

    while(fightsPassed < lostFights){
        fightsPassed++;

        if(fightsPassed % 2 === 0){
            expenses += helmetPrice;
        }

        if(fightsPassed % 3 === 0){
            expenses += swordPrice;
        }

        if(fightsPassed % 6 === 0){
            expenses += shiedPrice;
        }

        if(fightsPassed % 12 === 0){
            expenses += armorPrice;
        }
    }

    return `Gladiator expenses: ${expenses.toFixed(2)} aureus`;

}
console.log(gladiatorExpenses(7,2,3,4,5));