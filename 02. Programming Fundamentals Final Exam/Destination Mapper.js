function destinationMapper(string) {
    let reExp = /(\/|=)(?<destination>[A-Z][A-Za-z]{2,})\1/g;
    let travelPoints = 0;
    let validLocations = reExp.exec(string);
    let destinations = [];

    while (validLocations !== null) {
        travelPoints += validLocations.groups.destination.length;
        destinations.push(validLocations.groups.destination);
        validLocations = reExp.exec(string);
    }

    console.log(`Destinations: ${destinations.join(", ")}`);
    console.log(`Travel Points: ${travelPoints}`);

}
destinationMapper("ThisIs some InvalidInput");

console.log("--------------------------------------------------");


function destinationMapper(string) {
    let reExp = /(\/|=)(?<destination>[A-Z][A-Za-z]{2,})\1/g;
    let travelPoints = 0;
    let validLocations = string.matchAll(reExp);
    let locations = [];

    for(let location of validLocations){
        let name = location.groups.destination;
        travelPoints += name.length;
        locations.push(name);
    }
    console.log(`Destinations: ${locations.join(", ")}`);
    console.log(`Travel Points: ${travelPoints}`);

}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");

