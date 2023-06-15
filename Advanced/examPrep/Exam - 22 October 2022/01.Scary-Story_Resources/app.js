window.addEventListener("load", solve);

function solve() {
  //Capturing input elements

  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const age = document.getElementById("age");
  const storyTitle = document.getElementById("story-title");
  const genre = document.getElementById("genre");
  const story = document.getElementById("story");

  //publush Button
  const publishBtn = document.getElementById("form-btn");

  //ataching eventlistener
  publishBtn.addEventListener("click", publishFunq);

  //main Functions
  function publishFunq(e) {
    e.preventDefault();

    let firstNameValue = firstName.value;
    let lastNameValue = lastName.value;
    let ageValue = age.value;
    let storyTitleValue = storyTitle.value;
    let genreValue = genre.value;
    let storyValue = story.value;

    if (firstNameValue === "" ||
      lastNameValue === "" ||
      ageValue === "" ||
      storyTitleValue === "" ||
      genreValue === "" ||
      storyValue === "") {
      return
    }

    //creating list elements
    const ulEl = document.getElementById("preview-list");
    let liElement = document.createElement("li");
    liElement.classList.add("story-info");
    ulEl.appendChild(liElement);

    let article = document.createElement("article");
    liElement.appendChild(article);

    let h4el = document.createElement("h4");
    h4el.textContent = `Name: ${firstNameValue} ${lastNameValue}`;
    article.appendChild(h4el);

    let p1El = document.createElement("p");
    p1El.textContent = `Age: ${ageValue}`;
    article.appendChild(p1El);

    let p2El = document.createElement("p");
    p2El.textContent = `Title: ${storyTitleValue}`;
    article.appendChild(p2El);

    let p3El = document.createElement("p");
    p3El.textContent = `Genre: ${genreValue}`;
    article.appendChild(p3El);

    let p4El = document.createElement("p");
    p4El.textContent = `${storyValue}`;
    article.appendChild(p4El);

    //creating Buttons
    let saveBtn = document.createElement("button");
    saveBtn.classList.add("save-btn");
    saveBtn.textContent = "Save Story";
    liElement.appendChild(saveBtn);

    let editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit Story";
    liElement.appendChild(editBtn);

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete Story";
    liElement.appendChild(deleteBtn);

    // clearing input values

    firstName.value = "";
    lastName.value = "";
    age.value = "";
    storyTitle.value = "";
    genre.value = "";
    story.value = "";

    publishBtn.disabled = true;

    //attaching eventlisteners
    editBtn.addEventListener("click", editFunq);
    function editFunq(e) {
      e.preventDefault();
      publishBtn.disabled = false;

      firstName.value = firstNameValue;
      lastName.value = lastNameValue;
      age.value = ageValue;
      storyTitle.value = storyTitleValue;
      genre.value = genreValue;
      story.value = storyValue;

      liElement.remove();
    }

    saveBtn.addEventListener("click", saveFunq);
    function saveFunq(e) {
      e.preventDefault();

      const body = document.getElementsByClassName("body")[0];

      const divEl = document.getElementById("main");
      divEl.remove();

      let newDivEl = document.createElement("div");
      newDivEl.id = "main";

      let h1 = document.createElement("h1");
      h1.textContent = "Your scary story is saved!";
      newDivEl.appendChild(h1);
      body.appendChild(newDivEl);
    }

    deleteBtn.addEventListener("click", deleteFunq);
    function deleteFunq(e) {
      e.preventDefault();

      liElement.remove();
      publishBtn.disabled = false
    }
  }
}
