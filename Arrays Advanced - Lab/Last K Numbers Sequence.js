function lastKNumbersSequence(n, k) {
    let array = [1];
    for (let i = 1; i < n; i++) {
        let result = array.slice(- k);
        sum = 0;
        for(let el of result){
            sum += el;
        }
        array.push(sum);
    }
    console.log(array.join(" "));
}
lastKNumbersSequence(6, 3);