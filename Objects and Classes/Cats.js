function cats(array) {
    class Cat {
        constructor(name, age) {
            this.name = name,
                this.age = age
        }
        meow = function () {
            console.log(`${this.name}, age ${this.age} says Meow`)

        }
    }

    for(let cat of array){
        let [name,age] = cat.split(" ");
        let newCat = new Cat(name,age);
        newCat.meow();
    }
}
cats(['Mellow 2', 'Tom 5']);