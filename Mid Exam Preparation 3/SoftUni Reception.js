function softUni(array){
    let students = Number(array.pop());
    let hours = 0;
    let totalQuestionsPerHour = Number(array[0]) + Number(array[1]) + Number(array[2]);

    while(students > 0){
        hours ++;

        if(hours % 4 === 0){
            continue;
        }
        students -= totalQuestionsPerHour;

    }
    
    console.log(`Time needed: ${hours}h.`);
}
softUni(['3','2','5','40']);