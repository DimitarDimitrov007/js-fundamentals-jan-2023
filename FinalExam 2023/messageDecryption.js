function messageDecryption(array) {
    let count = Number(array.shift());
    let pattern = /^([\$|%])(?<tag>[A-Z][a-z]{2,})\1: \[(?<numberOne>\d+)\]\|\[(?<numberTwo>\d+)\]\|\[(?<numberThree>\d+)\]\|$/g;

    for(let i = 0; i < count; i++){
        let currentLine = array.shift();

        if(currentLine.match(pattern)){
            let result = pattern.exec(currentLine);
            let asciOne = String.fromCharCode(Number(result.groups.numberOne));
            let asciTwo = String.fromCharCode(Number(result.groups.numberTwo));
            let asciThree = String.fromCharCode(Number(result.groups.numberThree));
            let text = asciOne + asciTwo + asciThree;

            console.log(`${result.groups.tag}: ${text}`);

        }else{
            console.log("Valid message not found!");

        }

    }
}
messageDecryption([
    "4",
    "$Request$: [73]|[115]|[105]|",
    "%Taggy$: [73]|[73]|[73]|",
    "%Taggy%: [118]|[97]|[108]|",
    "$Request$: [73]|[115]|[105]|[32]|[75]|"
]);