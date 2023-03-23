function theImitationGame(array) {
    let message = array.shift();

    for (let command of array) {

        if(command === "Decode"){
            break;
        }

        let [name, numberOfLettersIndexSubstring, valueReplacement] = command.split("|");

        switch (name) {
            case "Move":
                let firstNLetters = message.substring(0,numberOfLettersIndexSubstring);
                let remainingLetters = message.substring(numberOfLettersIndexSubstring,);
                message = remainingLetters + firstNLetters;
                break;
            case "Insert":
                let firstPart = message.substring(0,numberOfLettersIndexSubstring);
                let secondPart = message.substring(numberOfLettersIndexSubstring,);
                message = firstPart + valueReplacement + secondPart;
                break;
            case "ChangeAll":
                while (message.includes(numberOfLettersIndexSubstring)) {
                    message = message.replace(numberOfLettersIndexSubstring, valueReplacement);
                }
                break;
        }
    }

    console.log(`The decrypted message is: ${message}`);
}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]);

theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
  ])
  