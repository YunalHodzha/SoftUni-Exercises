function create(words) {
   let myArr = words;
   let content = document.getElementById("content");

   for (let word of myArr) {
      let myDiv = document.createElement("div");
      let paragraph = document.createElement("p");
      paragraph.textContent = word;
      paragraph.style.display = "none";

      myDiv.addEventListener("click", showText);
      myDiv.appendChild(paragraph);
      content.appendChild(myDiv);
   }
   
   function showText(event) {
      let p = event.target.children[0];
      p.style.display = "";
   }
}