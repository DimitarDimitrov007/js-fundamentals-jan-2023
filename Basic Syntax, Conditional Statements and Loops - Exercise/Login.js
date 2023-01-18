function login(input) {
    let username = input[0];
    let password = "";
    for (let i = username.length - 1; i >= 0; i--) {
        password += username[i];
    }

    let numberOfTries = 0;
    let index = 1;
    while (numberOfTries < 4) {
        let currentPassword = input[index];
        if (currentPassword === password) {
            console.log(`User ${username} logged in.`);
            return;
        } else{
            numberOfTries++;
            if (numberOfTries === 4) {
                console.log(`User ${username} blocked!`);
                break;
            }
            console.log("Incorrect password. Try again.");
        }

        index++;
    }
}

login(['Acer', 'login', 'go', 'let me in', 'recA']);
login(['momo', 'omom']);
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);

console .log("---------------------------------------");
function login(input) {
    let username = input[0];
    let password = "";
    for (let i = username.length - 1; i >= 0; i--) {
        password += username[i];
    }

    let numberOfTries = 0;
    for(let i = 1; i < input.length; i++){
        let currentPass = input[i];

        if(currentPass === password){
            console.log(`User ${username} logged in.`);
        }else{
            numberOfTries++;
            if (numberOfTries === 4) {
                console.log(`User ${username} blocked!`);
                break;
            }
            console.log("Incorrect password. Try again.");
        }
    }

}
login(['Acer', 'login', 'go', 'let me in', 'recA']);
login(['momo', 'omom']);
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);