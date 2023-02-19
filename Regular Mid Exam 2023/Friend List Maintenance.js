function friendListMaintenance(array) {
    let friends = array.shift().split(", ");
    let blacklistedNames = 0;
    let lostNames = 0;

    for (command of array) {
        let currentCommand = command.split(" ");
        let name = currentCommand[0];
        let indexName = currentCommand[1];
        let newName = currentCommand[2];

        switch (name) {
            case "Blacklist":
                if(friends.includes(indexName)){
                    let index = friends.indexOf(indexName);
                    friends[index] = "Blacklisted";
                    console.log(`${indexName} was blacklisted.`);
                    blacklistedNames ++;
                }else{
                    console.log(`${indexName} was not found.`);
                }
                break;
            case "Error":
                indexName = Number(indexName);
                if(friends[indexName]){
                    let currentName = friends[indexName];
                    if(friends[indexName] !== "Blacklisted" && friends[indexName] !== "Lost"){
                        friends[indexName] = "Lost";
                        console.log(`${currentName} was lost due to an error.`)
                        lostNames ++;
                    }
                }
                break;
            case "Change":
                indexName = Number(indexName);
                if(friends[indexName]){
                    let oldName = friends[indexName];
                    friends.splice(indexName,1,newName);
                    console.log(`${oldName} changed his username to ${newName}.`);
                }
                break;
            case "Report":
                console.log(`Blacklisted names: ${blacklistedNames}`);
                console.log(`Lost names: ${lostNames}`);
                console.log(friends.join(" "));
                return;
        }

    }

}
friendListMaintenance(["Mike, John, Eddie, William",
"Blacklist Maya",
"Error 1",
"Change 4 George",
"Report"])


