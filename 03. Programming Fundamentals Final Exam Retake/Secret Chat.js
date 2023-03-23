function secretChat(array) {
    let message = array.shift();

    for (let line of array) {

        if (line === "Reveal") {
            break;
        }

        let [command, indexSubstring, replacement] = line.split(":|:");

        switch (command) {
            case "InsertSpace":
                let firstPart = message.substring(0, indexSubstring);
                let secondPart = message.substring(indexSubstring,);
                message = firstPart + " " + secondPart;
                console.log(message);
                break;
            case "Reverse":
                if (message.includes(indexSubstring)) {
                    message = message.replace(indexSubstring, "");
                    let reversedString = "";

                    for (let i = indexSubstring.length - 1; i >= 0; i--) {
                        let currentChar = indexSubstring[i];
                        reversedString += currentChar;
                    }

                    message += reversedString;

                    console.log(message);
                } else {
                    console.log("error");
                    
                }
                break;
            case "ChangeAll":
                while (message.includes(indexSubstring)) {
                    message = message.replace(indexSubstring, replacement);
                }

                console.log(message);
                break;

        }
    }

    console.log(`You have a new text message: ${message}`);
}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);

secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]
  )