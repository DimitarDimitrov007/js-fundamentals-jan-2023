function inventory(array) {
    let heroes = [];
    for(let line of array){
        let [name,level,items] = line.split(" / ");
        let hero = {
            name : name,
            level: level,
            items: items
        }

        heroes.push(hero);
    }
    heroes.sort((a,b) => a.level - b.level);

    for(let hero of heroes){
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}
inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ]
);