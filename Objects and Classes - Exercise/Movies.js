function movies(array) {
    let movies = [];
    for (let line of array) {
        if (line.includes("addMovie")) {
            let result = line.split("addMovie ");
            let name = result[1];
            let object = {
                name:name,
            }
            movies.push(object);

        }else if(line.includes("directedBy")){
            let [name,director] = line.split(" directedBy ");
            for(el of movies){
                if(el.name === name){
                    el.director = director;
                }
            }
        }else if(line.includes("onDate")){
            let [name,date] = line.split(" onDate ");
            for(el of movies){
                if(el.name === name){
                    el.date = date;
                }
            }

        }
    }
    
    for(let movie of movies){
        if(movie.name && movie.director && movie.date){
            console.log(JSON.stringify(movie))
        }
    }
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);