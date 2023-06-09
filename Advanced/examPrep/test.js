window.addEventListener("load", solve);

function solve() {
  // DOM elements and text inputs
  let postTitle = document.getElementById("post-title").value;
  let postCategory = document.getElementById("post-category").value;
  let postContent = document.getElementById("post-content").value;

  let reviewList = document.getElementById("review-list");

  let publishBtn = document.getElementById("publish-btn");

  //event Listeners
  publishBtn.addEventListener("click", publish());


  //main Functions

  //publish
  function publish() {
    let rpost = document.createElement("li");
    rpost.class = "rpost";

    let title = document.createElement("h4");
    title.textContent = postTitle;

    let category = document.createElement("p");
    category.textContent = postCategory

    let content = document.createElement("p");
    content.textContent = postContent;

    rpost.appendChild(title, category, content);
    reviewList.appendChild(rpost);
  }
}
