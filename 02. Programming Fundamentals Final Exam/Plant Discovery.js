function plantDiscovery(array) {
    let n = array.shift();
    let collection = new Map;

    for (let i = 0; i < n; i++) {
        let currentLine = array[i];
        let [plant, rarity] = currentLine.split("<->");

        if (!collection.has(plant)) {
            collection.set(plant, new Map);
            collection.get(plant).set("rarity", rarity);
            collection.get(plant).set("ratings", new Set);

        } else {
            collection.get(plant).set("rarity", rarity);
        }

    }
    

    for (let i = n; i < array.length; i++) {
        let currentLine = array[i];

        if (currentLine === "Exhibition") {
            break;
        }

        currentLine = currentLine.split(": ");
        let command = currentLine[0];
        let [plant, ratingOrRarity] = currentLine[1].split(" - ");

        if (!collection.has(plant)) {
            console.log("error");
            continue;
        }

        switch (command) {
            case "Rate":
                collection.get(plant).get("ratings").add(ratingOrRarity);
                break;
            case "Update":
                collection.get(plant).set("rarity", ratingOrRarity);
                break;
            case "Reset":
                collection.get(plant).set("ratings", new Set);
                break;
        }
    }

   let collectionEntries = collection.entries();

   console.log("Plants for the exhibition:");

    for(let plant of collectionEntries){
        let name = plant[0];
        let rarity = plant[1].get("rarity")
        let ratings = plant[1].get("ratings")
        let avg = 0;
        ratings = Array.from(ratings)
        ratings.forEach(el =>{
            avg += Number(el);
        })

        avg = avg / ratings.length;
        if(!avg){
            avg = 0;
        }

        console.log(`- ${name}; Rarity: ${rarity}; Rating: ${avg.toFixed(2)}`);
    }
}

plantDiscovery (["2",
"Candelabra<->10",
"Oahu<->10",
"Rate: Oahu - 7",
"Rate: Candelabra - 6",
"Exhibition"])

plantDiscovery (["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"])

