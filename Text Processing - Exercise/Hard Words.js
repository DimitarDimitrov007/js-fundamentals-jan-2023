function hardWords(array) {
    let text = array[0].split(" ");
    let missingWords = array[1];

    for(let i = 0; i < text.length; i++){
        let currentEl = text[i];

        if(currentEl.includes("_")){
            currentEl = currentEl.substring(0,currentEl.lastIndexOf("_") + 1);
            let endElement = text[i].substring(currentEl.lastIndexOf("_") + 1);
            for(let word of missingWords){
                if( currentEl.length === word.length){
                    if(endElement.length > 0){
                        text[i] = word + endElement;
                    }else{
                        text[i] = word;
                    }
                  
                }
            }
        }
    }

    console.log(text.join(" "));
}
hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
);