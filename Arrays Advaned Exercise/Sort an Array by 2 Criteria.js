function sortAnArrayBy2Criteria(array){
    let result = array.sort((a,b) => {
        if(a.length === b.length){
            return a.localeCompare(b);
        }
        return a.length - b.length;
    })

    return result.join("\n");
    
}
console.log(sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']));
console.log("--------------------------------");
console.log(sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));