function oldBooks(input) {
    let favBook = input[0];
    let index = 1;
    let bookIsFound = false;
    
    while (input[index] !== "No More Books") {
        if (input[index] === favBook) {
            bookIsFound = true;
            break;
        }
        index++;
    }
    if (bookIsFound == true) {
        console.log(`You checked ${index -1} books and found it.`);
    } else {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${index -1} books.`)
    }
}

oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])


