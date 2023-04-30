function movies(arr) {
    let movieList = [];

    class Movie {
        constructor(name, director, date) {
            this.name = name;
            this.director = director;
            this.date = date
        }
    }
    let contains = function (name) {
        let myMovie = movieList.find((m) => m.name === name);
        return myMovie;
    }

    for(let line of arr) {
        let commands = line.split(" ");
        if(commands.includes("addMovie")) {
            commands.shift()
            commands = commands.join(" ");
            let movie = new Movie(commands);
            movieList.push(movie);
        }else if(commands.includes("directedBy")) {
            let indexOf = commands.indexOf("directedBy");
            let director = commands.slice(indexOf + 1).join(" ");
            let movie = commands.slice(0, indexOf).join(" ");
            if((contains(movie)) === movie) {
                movieList[movie].director = director;
            }
        }else if (commands.includes("onDate")) {
            let date = commands.pop();
            commands.pop();
            let movie = commands.join(" ");
            if(movieList.includes(movie)) {
                movieList[movie].date = date;
            }
        }
    }
    console.table(movieList)
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'])
    console.log("===============");
    movies([
        'addMovie The Avengers',
        'addMovie Superman',
        'The Avengers directedBy Anthony Russo',
        'The Avengers onDate 30.07.2010',
        'Captain America onDate 30.07.2010',
        'Captain America directedBy Joe Russo'])