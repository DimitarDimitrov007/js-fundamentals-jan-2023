function listOfProducts(list){
    let result = list.sort((a,b) => a.localeCompare(b));
    for(let i = 0; i < result.length; i ++){
        console.log(`${i + 1}.${result[i]}`);
    }
}
listOfProducts(['Watermelon', 'Banana', 'Apples']);