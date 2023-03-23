function mirrorWorlds(array) {
    let text = array.shift();
    let pattern = /([@|#])(?<wordOne>[A-Za-z]{3,})\1\1(?<wordTwo>[A-Za-z]{3,})\1/g;
    let matches = text.matchAll(pattern);
    let validPairs = [];
    let mirrorPairs = [];

    for (let match of matches) {
        let wordOne = match.groups.wordOne;
        let wordTwo = match.groups.wordTwo;
        validPairs.push([wordOne, wordTwo]);

        let reversedWordTwo = "";

        for (let i = wordTwo.length - 1; i >= 0; i--) {
            let currentChar = wordTwo[i];
            reversedWordTwo += currentChar;
        }

        let pair = [];
        if (wordOne === reversedWordTwo) {
            pair.push(wordOne, wordTwo);
            mirrorPairs.push(pair);

        }

    }

    if (validPairs.length > 0) {
        console.log(`${validPairs.length} word pairs found!`);

    } else {
        console.log("No word pairs found!");

    }

    if (mirrorPairs.length === 0) {
        console.log("No mirror words!");

    } else {
        console.log("The mirror words are:");
        let pairs = [];

        for (let pair of mirrorPairs) {
            pairs.push(`${pair[0]} <=> ${pair[1]}`);
        }

        console.log(pairs.join(", "));
    }
}
mirrorWorlds([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);

mirrorWorlds(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);

mirrorWorlds(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);