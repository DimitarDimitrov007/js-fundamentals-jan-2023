function bonusScoringSystem(array) {
    let students = Number(array.shift());
    let lectures = Number(array.shift());
    let additionalBonus = Number(array.shift());

    let highestScore = 0;
    let visits = 0;

    for(let i = 0; i < array.length; i++){
        let attendance = Number(array[i]);

        let totalScore = attendance / lectures * (5 + additionalBonus);
        if(totalScore > highestScore){
            highestScore = totalScore;
            visits = attendance;
        }
    }

    console.log(`Max Bonus: ${Math.ceil(highestScore)}.`);
    console.log(`The student has attended ${visits} lectures.`);

}
bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ]
  );