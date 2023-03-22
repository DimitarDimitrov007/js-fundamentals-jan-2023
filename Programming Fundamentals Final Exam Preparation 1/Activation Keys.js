function activationKeys(array) {
    let key = array[0];
    let index = 1;
    let currentLine = array[index];
    index++;

    while (currentLine !== "Generate") {
        currentLine = currentLine.split(">>>");
        let commandName = currentLine[0];
        let substringCaseStartIndex = currentLine[1];
        let startIndexOrEndIndex = currentLine[2];
        let endIndex = currentLine[3];

        switch (commandName) {
            case "Contains":
                if (key.includes(substringCaseStartIndex)) {
                    console.log(`${key} contains ${substringCaseStartIndex}`);

                } else {
                    console.log("Substring not found!");
                }
                break;
            case "Flip":
                let substring = key.substring(startIndexOrEndIndex, endIndex);
                if (substringCaseStartIndex === "Upper") {
                    let newSubstring = substring.toUpperCase();
                    key = key.replace(substring, newSubstring);
                    console.log(key);

                } else {
                    let newSubstring = substring.toLowerCase();
                    key = key.replace(substring, newSubstring);
                    console.log(key);
                }

                break;
            case "Slice":
                let substr = key.substring(substringCaseStartIndex, startIndexOrEndIndex);
                key = key.replace(substr,"");
                console.log(key);
                break;

        }

        currentLine = array[index];
        index++;
    }

    console.log(`Your activation key is: ${key}`);
}
activationKeys((["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])
);