function modernTimes(text) {
    let result = [];
    let words = text.split(" ");

    for (let word of words) {
        if (word.startsWith("#") && word.length > 1) {
            word = word.substring(1);

            let isValid = true;

            for (let char of word) {
                char = char.toLowerCase();
                if (char.charCodeAt(0) < 97 || char.charCodeAt(0) > 122) {
                    isValid = false;
                    break;
                }
            }

            if (isValid) {
                result.push(word);
            }
        }
    }
    console.log(result.join("\n"));
}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign')