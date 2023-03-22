function emojiDetector(array){
    let emojiPattern = /(\*{2}|:{2})(?<emojiName>[A-Z][a-z]{2,})\1/g;
    let text = array.shift();
    let digits = text.match(/[\d]/g);
    let threshold = 1;
    let coolEmojis = [];
    let count = 0;

    for(let digit of digits){
        threshold = threshold * digit;
    }

    let emojis = text.matchAll(emojiPattern);

    for(let emoji of emojis){
        count ++;
        let emojiCoolness = 0;
        let name = emoji.groups.emojiName;

        for(let char of name){
            emojiCoolness += char.charCodeAt(0);
        }

        if(emojiCoolness > threshold){
            coolEmojis.push(emoji[0]);
        }
    }

    console.log(`Cool threshold: ${threshold}`);
    console.log(`${count} emojis found in the text. The cool ones are:`);

    for(let emoji of coolEmojis){
        console.log(emoji);
    }
}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);
emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);
emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);