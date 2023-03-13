function revealWords(words, sentence) {
    let splitWords = words.split(", ");

    let text = sentence.split(" ");

    for (let i = 0; i < text.length; i++) {
        let currentWord = text[i];
        if (currentWord.startsWith("*")) {
            for (let word of splitWords) {
                if (word.length === currentWord.length) {
                    text[i] = word;
                }
            }
        }
    }

    console.log(text.join(" "));
}
revealWords('great, learning','softuni is ***** place for ******** new programming languages');
revealWords('great', 'softuni is ***** place for learning new programming languages');