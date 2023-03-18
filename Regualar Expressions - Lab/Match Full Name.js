function matchFullName(string){
    let regExp = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let match = regExp.exec(string);
    let result = "";

    while(match !== null){
        result += match[0] + " ";
        match = regExp.exec(string);
    }

    console.log(result)
}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");