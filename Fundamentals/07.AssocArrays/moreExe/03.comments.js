function comments(arr) {
    let dataBase = { users: [], articleList: [], comments: {} };

    for (let line of arr) {
        if (line.split(" ").length === 2) {
            line = line.split(" ");
            if (line[0] === "user") {
                if (!dataBase.users.includes(line[1])) {
                    dataBase.users.push(line[1]);
                }
            } else if (line[0] === "article") {
                if (!dataBase.articleList.includes(line[1])) {
                    dataBase.articleList.push(line[1]);
                }
            }
        } else {
            let [user, article, title, comment] = line
                .replace(" posts on ", "&")
                .replace(": ", "&")
                .replace(", ", "&")
                .split("&");

            if (dataBase.users.includes(user) && dataBase.articleList.includes(article)) {
                if (!dataBase.comments.hasOwnProperty(article)) {
                    dataBase.comments[article] = [{
                        [user]: `--- From user ${user}: ${title} - ${comment}`
                    }]
                } else {
                    dataBase.comments[article].push({ [user]: `--- From user ${user}: ${title} - ${comment}` })
                }
            }
        }
    }

    let commentsListArr = Object.entries(dataBase.comments).sort((a,b) => b[1].length - a[1].length );
    
    for(let comment of commentsListArr) {
        console.log(`Comments on ${comment[0]}`);

        let userCommentsArr = comment[1];

        let sortedArr=[];

        for(comment of userCommentsArr) {
            comment = Object.entries(comment);
            sortedArr.push(comment);
        }

        sortedArr.sort((a, b) => a[0][0].localeCompare(b[0][0]));
        sortedArr.forEach((el) => console.log(el[0][1]));
    }
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