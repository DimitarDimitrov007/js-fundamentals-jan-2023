function passwordReset(array) {
    let password = array.shift();

    for (let command of array) {
        if (command === "Done") {
            break;
        }

        let [commandName, indexSubstring, lengthSubstitute] = command.split(" ");

        switch (commandName) {
            case "TakeOdd":
                let newPassword = "";
                for (let i = 0; i < password.length; i++) {
                   
                    if (i % 2 !== 0) {
                        newPassword += password[i];
                    }
                }

                password = newPassword

                console.log(password);
                break;
            case "Cut":
                let secondPart = password.substring(indexSubstring,);
                let substring = secondPart.substring(0,lengthSubstitute);
                password = password.replace(substring, "");
                console.log(password);
                break;
            case "Substitute":
                if(!password.includes(indexSubstring)){
                    console.log("Nothing to replace!");

                }else{
                    while(password.includes(indexSubstring)){
                        password = password.replace(indexSubstring,lengthSubstitute);
                    }
                    console.log(password);
                }
                break;
        }
    }
    console.log(`Your password is: ${password}`);
}

passwordReset([
    "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"
]);

passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"])
