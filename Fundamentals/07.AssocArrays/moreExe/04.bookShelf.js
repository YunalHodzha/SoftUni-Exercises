function bookShelf(arr) {
    let bookShelf = { shelfId: {}, books: {} };

    for (let line of arr) {
        if (line.includes("->")) {
            let [id, genre] = line.split(" -> ");
            id = Number(id);

            if (!bookShelf.shelfId.hasOwnProperty([id])) {
                bookShelf.shelfId[id] = genre;
            }
        } else {
            let [title, author, genre] = line
                .replace(": ", "&")
                .replace(", ", "&")
                .split("&");

            if (Object.values(bookShelf.shelfId).includes(genre)) {
                if (!bookShelf.books.hasOwnProperty(genre)) {
                    bookShelf.books[genre] = [{ [title]: author }];
                } else {
                    bookShelf.books[genre].push({ [title]: author });
                }
            }

        }
    }

    let shelfsArr = Object.entries(bookShelf.books).sort((a, b) =>
        a[0][1].localeCompare(b[0][1])
    )

    for (let genre of shelfsArr) {
        let key = '';
        let shelfIdArr = Object.entries(bookShelf.shelfId);

        for (let shelf of shelfIdArr) {
            if (genre[0] === shelf[1]) {
                key = shelf[0]
            };
        };

        console.log(`${key} ${genre[0]}: ${genre[1].length}`);


        let booksArr = Object.entries(bookShelf.books[genre[0]]);

        let bookArrSorted = [];

        for (let el of booksArr) {
            let book = Object.entries(el[1]);

            bookArrSorted.push(book);
        }

        bookArrSorted = bookArrSorted.sort((a, b) => a[0][0].localeCompare(b[0][0]));

        bookArrSorted.forEach((el) => console.log(`--> ${el[0][0]}: ${el[0][1]}`));
    }
}

bookShelf([
    '1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history']
);
console.log("-----------------");
bookShelf([
    '1 -> mystery',
    '2 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Lions and Rats: Gabe Roads, history',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi']);