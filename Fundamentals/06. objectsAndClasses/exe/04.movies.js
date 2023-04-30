function movies(arr) {
    let myList = [];

    class Movie {
        constructor(name, director, date) {
            this.name = name;
            this.director = director;
            this.date = date;
        }
    }

    let cointains = function (movieName) {
        let movie = null;
        movie = myList.find((m) => m.name === movieName);
        return movie;
    }

    for (let i = 0; i < arr.length; i++) {
        let command = (arr[i].split(" "));

        if (command.includes("addMovie")) {
            command.shift();
            let name = command.join(" ");
            myList.push(new Movie(name, null, null));
        } else if (command.includes("directedBy")) {
            let name1 = command.slice(0, command.indexOf('directedBy')).join(' ');
            if (cointains(name1) !== null) {
                if (cointains(name1) !== undefined) {
                    let movie = cointains(name1);
                    movie.director = command.slice(command.indexOf('directedBy') + 1, command.length).join(' ');
                }
            } else {
                continue;
            }
        } else if (command.includes("onDate")) {
            let name2 = command.slice(0, command.indexOf('onDate')).join(' ');
            if (cointains(name2) !== null) {
                if (cointains(name2) !== undefined) {
                    let movie = cointains(name2);
                    movie.date = command.slice(command.indexOf('onDate') + 1, command.length).join(' ');
                }
            } else {
                continue;
            }
        }
    }
    myList.forEach(m => m.director !== null && m.name !== null && m.date !== null ? console.log(JSON.stringify(m)): null);
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
]
);
console.log("-----------------");
movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo']);