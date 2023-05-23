function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      const obj = {};

      const input = document.querySelector("#inputs textarea");
      let inputList = input.value.replaceAll("\n", " ");

      for (let element of inputList) {
         console.log(element)
      }

      console.log({inputList})
      
   }
}