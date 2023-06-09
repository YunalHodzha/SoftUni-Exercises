window.addEventListener("load", solve);

function solve() {
  // DOM elements and text inputs
  let postTitle = document.getElementById("post-title");
  let postCategory = document.getElementById("post-category");
  let postContent = document.getElementById("post-content");
  let reviewSection = document.getElementById("review-list");
  let approveSection = document.getElementById("published-list");
  let clearBtn = document.getElementById("clear-btn");

  let publishBtn = document.getElementById("publish-btn");

  //event Listeners
  publishBtn.addEventListener("click", publish);
  clearBtn.addEventListener("click", clear);

  //main Functions
  function publish() {
    let titleValue = postTitle.value;
    let categoryValue = postCategory.value;
    let contentValue = postContent.value;

    if (!titleValue || !categoryValue || !contentValue) {
      return;
    }

    createDOMElements(titleValue, categoryValue, contentValue);
    postTitle.value = "";
    postCategory.value = "";
    postContent.value = "";
  }

  function createDOMElements(titleValue, categoryValue, contentValue) {
    let li = document.createElement("li");
    li.classList.add("rpost");

    let article = createArticle(titleValue, categoryValue, contentValue);

    let editBtn = document.createElement("Button");
    editBtn.classList.add("action-btn");
    editBtn.classList.add("edit");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", editPost)

    let approveBtn = document.createElement("button");
    approveBtn.classList.add("action-btn");
    approveBtn.classList.add("approve");
    approveBtn.textContent = "Approve";
    approveBtn.addEventListener("click", approve);

    li.appendChild(article);
    li.appendChild(editBtn);
    li.appendChild(approveBtn);

    reviewSection.appendChild(li);
  }

  function createArticle(titleValue, categoryValue, contentValue) {
    let article = document.createElement("article");
    let h = document.createElement("h4");
    h.textContent = titleValue;

    let categoryP = document.createElement("p");
    categoryP.textContent = `Category: ${categoryValue}`;

    let contentP = document.createElement("p");
    contentP.textContent = `Content: ${contentValue}`;

    article.appendChild(h);
    article.appendChild(categoryP);
    article.appendChild(contentP);
    return article;
  }

  function editPost(e) {
    let currentPost = e.target.parentElement;
    let articleContent = currentPost.getElementsByTagName("article")[0].children;
    let titleValue = articleContent[0].textContent;
    let categoryValue = articleContent[1].textContent;
    let contentValue = articleContent[2].textContent;

    postTitle.value = titleValue;
    postCategory.value = categoryValue.split(": ")[1];
    postContent.value = contentValue.split(": ")[1];

    currentPost.remove();
  }

  function approve(e) {
    let currentPost = e.target.parentElement;
    approveSection.appendChild(currentPost);
    Array.from(currentPost.querySelectorAll("button")).forEach(btn => btn.remove());
  }

  function clear(e) {
    let currentPost = e.target.parentElement;
    Array.from(currentPost.querySelectorAll("li")).forEach(li => li.remove());
  }
}
