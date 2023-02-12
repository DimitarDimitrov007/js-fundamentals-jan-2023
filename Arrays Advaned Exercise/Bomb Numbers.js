function bombNumbers(sequence, specialBombNumber) {
    let bombNumber = specialBombNumber[0];
    let bombPower = specialBombNumber[1];
    let elementsToRemove = bombPower * 2 + 1;

    for (num of sequence) {
        let currentNum = num;
        if (currentNum === bombNumber) {
            let bombIndex = sequence.indexOf(currentNum);
            let startIndex = bombIndex - bombPower
            if(startIndex <0){
                elementsToRemove += startIndex;
                startIndex = 0;
            }
            sequence.splice(startIndex,elementsToRemove);
            
        }
    }

    let sum = 0;
    for (el of sequence) {
        sum += el;
    }
    console.log(sum);
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
    );
bombNumbers([1, 4, 4, 2, 8, 9, 1],
    [9, 3]
    );
bombNumbers([1, 7, 7, 1, 2, 3],
    [7, 1]
    );
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
    );