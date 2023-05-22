function search() {
   let towns = Array.from(document.getElementsByTagName("li"))
   let input = document.getElementById("searchText").value;
   let matchesFound = 0;
   let result = document.getElementById("result");

   for(let element of towns) {
      element.style.fontWeight = "normal";
      element.style.textDecoration = "none";
   }

   result.textContent = "";

   for (let element of towns) {

      if (element.textContent.includes(input)) {
         matchesFound++;
         element.style.fontWeight = "bold";
         element.style.textDecoration = "underline";
      }
   }

   result.textContent = `${matchesFound} matches found`;
}
