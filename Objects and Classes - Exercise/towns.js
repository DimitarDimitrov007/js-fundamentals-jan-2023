function towns(array){
    let townInfo = {};

    for(let line of array){
        let [town,latitude,longitude] = line.split(" | ");
        townInfo.town = town;
        townInfo.latitude = Number(latitude).toFixed(2);
        townInfo.longitude = Number(longitude).toFixed(2);
        console.log(townInfo)
    }
}
towns(['Plovdiv | 136.45 | 812.575']);