function spiceMustFlow(startAmount) {
    let days = 0;
    let storage = 0;

    while (startAmount >= 100) {
        days++;
        storage += startAmount - 26;
        startAmount -= 10;
      
    }

    if (storage >= 26) {
        storage -= 26;
    } else {
        storage -= storage;
    }
    console.log(days);
    console.log(storage);
}
spiceMustFlow(450);