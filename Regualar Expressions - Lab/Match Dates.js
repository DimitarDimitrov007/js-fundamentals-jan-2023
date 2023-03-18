function matchDates(array){
    let regExp = /\b(?<day>\d{2})(?<separator>[.\/-])(?<month>(?:[A-Z][a-z]{2}))+\k<separator>(?<year>\d{4})\b/gm;

    let result = regExp.exec(array[0]);

    while(result !== null){
        let day = result.groups.day;
        let month = result.groups.month;
        let year = result.groups.year;

        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);

        result = regExp.exec(array[0]);
    }
}
matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);