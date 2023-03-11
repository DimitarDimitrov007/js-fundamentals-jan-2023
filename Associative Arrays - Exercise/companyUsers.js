function companyUsers(array) {
    let companies = new Map;

    for(let line of array){
        let [company,employee] = line.split(" -> ");
        
        if(!companies.has(company)){
            companies.set(company,new Set);
        }

        if(!companies.get(company).has(employee)){
            companies.get(company).add(employee);
        }
    }

    let sortedCompanies = Array.from(companies.keys()).sort((a,b) => a.localeCompare(b));

    for(let company of sortedCompanies){
        console.log(company);
        let employees = Array.from(companies.get(company));
        for(let employee of employees){
            console.log(`-- ${employee}`)
        }
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]); 

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
    )