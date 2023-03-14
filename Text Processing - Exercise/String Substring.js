function stringSubstring(word,text) {
    let result = text.split(" ").map((x)=> x.toLowerCase());

    if(result.includes(word)){
        console.log(word);
    }else{
        console.log(`${word} not found!`);
    }

}
stringSubstring('javascript',
    'JavaScript is the best programming language'
);
stringSubstring('python',
'JavaScript is the best programming language'
);