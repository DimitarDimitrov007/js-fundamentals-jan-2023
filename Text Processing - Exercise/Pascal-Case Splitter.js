function pascalCaseSplitter(string) {
    let words = [];
    let startIndex = 0;

    for (let i = 1; i < string.length; i++) {
        let currentChar = string[i];
        

        if (currentChar.charCodeAt(0) >= 65 && currentChar.charCodeAt(0) <= 90) {
            words.push(string.substring(startIndex, i));
            startIndex = i ;
        }

    }

    words.push(string.substring(startIndex));
    console.log(words.join(", "));
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSplitter('HoldTheDoor');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');