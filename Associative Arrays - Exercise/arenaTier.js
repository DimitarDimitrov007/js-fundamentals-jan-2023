function arenaTier(array) {
    let gladiatorsPool = {};
    let index = 0;
    let currentLine = array[index];
    index++;

    while (currentLine !== 'Ave Cesar') {
        let gladiatorInfo = currentLine.split(" -> ");

        if (gladiatorInfo.length === 3) {
            let [name, technique, skill] = gladiatorInfo;
            if (!gladiatorsPool.hasOwnProperty(name)) {
                gladiatorsPool[name] = {};
                gladiatorsPool[name][technique] = Number(skill);

            } else {
                if (!gladiatorsPool[name].hasOwnProperty(technique)) {
                    gladiatorsPool[name][technique] = Number(skill);
                }

                if (gladiatorsPool[name][technique] < Number(skill)) {
                    gladiatorsPool[name][technique] = Number(skill);
                }
            }

        } else {
            let [gladiatorOne, gladiatorTwo] = currentLine.split(" vs ");

            if (gladiatorsPool.hasOwnProperty(gladiatorOne) && gladiatorsPool.hasOwnProperty(gladiatorTwo)) {
                let gladiatorOneTechniques = Object.keys(gladiatorsPool[gladiatorOne]);
                let gladiatorTwoTechniques = Object.keys(gladiatorsPool[gladiatorTwo]);

                let bigger = gladiatorOneTechniques.length >= gladiatorTwoTechniques.length ? gladiatorOneTechniques : gladiatorTwoTechniques;
                let smaller = gladiatorOneTechniques.length >= gladiatorTwoTechniques.length ? gladiatorTwoTechniques : gladiatorOneTechniques;

                for (let technique of smaller) {
                    if (bigger.includes(technique)) {
                        let gladiatorOneSkill = gladiatorsPool[gladiatorOne][technique];
                        let gladiatorTwoSkill = gladiatorsPool[gladiatorTwo][technique];

                        if (gladiatorOneSkill > gladiatorTwoSkill) {
                            delete gladiatorsPool[gladiatorTwo];
                            break;
                        } else {
                            delete gladiatorsPool[gladiatorOne];
                            break;
                        }
                    }
                }
            }
        }

        currentLine = array[index];
        index++;
    }

    let gladiatorPoints = {};

    for (let [name, technique] of Object.entries(gladiatorsPool)) {
        let sum = 0;

        for (let [tech, skill] of Object.entries(technique)) {
            sum += Number(skill);
        }

        gladiatorPoints[name] = sum;
    }

    let sortedGladiators = Object.entries(gladiatorPoints).sort((a, b) => {
        return b[1] - a[1] || a[0].localeCompare(b[0])
    });

    for (let [name, points] of sortedGladiators) {
        console.log(`${name}: ${points} skill`);
        let techniqueAndSkill = Object.entries(gladiatorsPool[name]).sort((a, b) => {
            return b[1] - a[1] || a[0].localeCompare(b[0])
        });

        for (let [tech, skill] of techniqueAndSkill) {
            console.log(`- ${tech} <!> ${skill}`);
        }
    }
}
arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]
)


