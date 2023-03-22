function worldTour(array) {
    let stops = array.shift();

    let currentCommand = array.shift();

    while (currentCommand !== "Travel") {
        currentCommand = currentCommand.split(":");
        let commandName = currentCommand[0];
        let indexStartIndexOld = currentCommand[1];
        let stringEndIndexNew = currentCommand[2];

        switch (commandName) {
            case "Add Stop":
                if (stops[indexStartIndexOld]) {
                    let firstPart = stops.substring(0, indexStartIndexOld);
                    let secondPart = stops.substring(indexStartIndexOld, stops.length);
                    stops = firstPart + stringEndIndexNew + secondPart;
                    console.log(stops);
                } else {
                    console.log(stops);
                }
                break;
            case "Remove Stop":
                if (stops[indexStartIndexOld] && stops[stringEndIndexNew]) {
                    let substring = stops.substring(indexStartIndexOld, Number(stringEndIndexNew) + 1);
                    stops = stops.replace(substring, "");
                    console.log(stops)
                } else {
                    console.log(stops);
                }
                break;
            case "Switch":
                if (stops.includes(indexStartIndexOld)) {
                    stops = stops.replace(indexStartIndexOld, stringEndIndexNew);
                    console.log(stops);

                } else {
                    console.log(stops);
                }
                break;

        }

        currentCommand = array.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${stops}`);
}
worldTour([
    "Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"
]);

worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"]);
