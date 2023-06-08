function solution() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return myPost = {
                
            }
        }
    }

    return {
        Post
    }
}

const classes = solution();
let post = new classes.Post("Post", "Content");
console.log(post.toString());
// Post: Post
// Content: Content
let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);
scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");
console.log(scm.toString());
// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
// * Good post
// * Very good post
// * Wow!