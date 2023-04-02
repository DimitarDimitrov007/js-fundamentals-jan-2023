function stringGame(array) {
    let text = array.shift();

    for (let line of array) {
        line = line.split(" ");
        let [command, charSubstringStartIndex, replacementCount] = line;

        switch (command) {
            case "Change":
                while (text.includes(charSubstringStartIndex)) {
                    text = text.replace(charSubstringStartIndex, replacementCount);
                }
                console.log(text);
                break;
            case "Includes":
                if (text.includes(charSubstringStartIndex)) {
                    console.log("True");
                } else {
                    console.log("False");
                }
                break;
            case "End":
                if (text.endsWith(charSubstringStartIndex)) {
                    console.log("True");
                } else {
                    console.log("False");
                }
                break;
            case "Uppercase":
                text = text.toUpperCase();
                console.log(text);
                break;
            case "FindIndex":
                console.log(text.indexOf(charSubstringStartIndex));
                break;
            case "Cut":
                text = text.substring(Number(charSubstringStartIndex), Number(replacementCount) + Number(charSubstringStartIndex));
                console.log(text);

                break;
            case "Done":
                return;

        }
    }
}
stringGame([
    "//Th1s 1s my str1ng!//",
    "Change 1 i",
    "Includes string",
    "End my",
    "Uppercase",
    "FindIndex I",
    "Cut 5 5",
    "Done"
]);

stringGame([
    "*S0ftUni is the B3St Plac3**",
    "Change 2 o",
    "Includes best",
    "End is",
    "Uppercase",
    "FindIndex P",
    "Cut 3 7",
    "Done"
]);
