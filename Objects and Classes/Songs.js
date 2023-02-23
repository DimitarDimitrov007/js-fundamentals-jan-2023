function songs(array){
    class Song  {
        constructor(typeList,name,time){
            this.typeList = typeList,
            this.name = name,
            this.time = time
        }
    }

    array.shift();
    let type = array.pop();

    for(let el of array){
        let[typeList,name,time] = el.split("_");
        let song = new Song(typeList,name,time);

        if(song.typeList === type){
            console.log(song.name);
        }

        if(type === "all"){
            console.log(song.name);
        }
    }
}
songs([3,'favourite_DownTown_3:14','favourite_Kiss_4:16','favourite_Smooth Criminal_4:01','favourite']);