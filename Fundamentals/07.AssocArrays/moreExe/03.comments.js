function comments(arr) {
    let users = [];
    let articles = {};

    for (let data of arr) {

        if (data.includes("user")) {
            data = data.split(" ");
            let userName = data[1];
            users.push(userName);

        } else if (data.includes("article")) {
            data = data.split(" ");
            let articleName = data[1];
            articles[articleName] = {};

        } else if (data.includes("posts on")) {
            data = data.split(" posts on ");
            let username = data.shift();
            data = data.join(" ").split(": ");
            let articleName = data.shift();
            data = data.join(" ").split(", ");
            let titleName = data.shift();
            let comment = data.shift();

            if (users.includes(username) && articles.hasOwnProperty(articleName)) {
                if (!articles[articleName].hasOwnProperty(username)) {
                    articles[articleName][username] = [];
                }

                articles[articleName][username].push({ [titleName]: comment });
            }
        }
    }

    let articlesArr = Object.entries(articles);
    articlesArr.sort((a, b) => {
        let commentCountA = countComments(a[1]);
        let commentCountB = countComments(b[1]);
        commentCountB - commentCountA
    })


    function countComments(article) {
        let count = 0;
        for(let user in article) {
            count += article[user].length;
        }
        return count;
    }

    console.table(articlesArr)
}

comments([
    'user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much']);

console.log("---------------");

comments([
    'user Mark',
    'Mark posts on someArticle: NoTitle, stupidComment',
    'article Bobby',
    'article Steven',
    'user Liam',
    'user Henry',
    'Mark posts on Bobby: Is, I do really like them',
    'Mark posts on Steven: title, Run',
    'someUser posts on Movies: Like']
)