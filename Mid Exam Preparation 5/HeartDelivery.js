function heartDelivery(array) {
    let houses = array.shift().split("@").map(Number);
    let startIndex = 0;
    let valentineSDay = 0;

    for (el of array) {
        let currentCommand = el.split(" ");
        let name = currentCommand[0];
        let number = Number(currentCommand[1]);

        switch (name) {
            case "Jump":
                startIndex = startIndex + number;
                if (startIndex > houses.length - 1) {
                    startIndex = 0;
                }

                if (houses[startIndex] === 0) {
                    console.log(`Place ${startIndex} already had Valentine's day.`);
                    
                } else {
                    houses[startIndex] -= 2;
                    if (houses[startIndex] <= 0) {
                        houses[startIndex] = 0;
                        console.log(`Place ${startIndex} has Valentine's day.`);
                    }
                }
                break;
            case "Love!":
                console.log(`Cupid's last position was ${startIndex}.`);
                
                let result = houses.filter(x => x === 0);
    
                if (result.length === houses.length) {
                    console.log("Mission was successful.");
                    return;
                } else {
                    let result = houses.filter(x => x !== 0);
                    console.log(`Cupid has failed ${result.length} places.`);
                    return;
                }
        }
    }
}
heartDelivery(["0@0@0",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"]);


