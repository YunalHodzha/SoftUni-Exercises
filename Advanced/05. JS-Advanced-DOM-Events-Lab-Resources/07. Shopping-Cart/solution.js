function solve() {
   const PRODUCTS = document.getElementsByClassName("product");
   let textResult = document.getElementsByTagName("textarea")[0];
   const checkOut = document.querySelectorAll(".checkout")[0];
   checkOut.addEventListener("click", checkOutFunc);

   const basketObj = {};

   for (let i = 0; i < PRODUCTS.length; i++) {
      let product_add = PRODUCTS[i].children[2];
      let addBtn = product_add.getElementsByTagName("button")[0];

      addBtn.addEventListener("click", addFunc);
   }


   function addFunc(event) {
      const target = event.target.parentNode.parentNode;

      const name = target.getElementsByClassName("product-title")[0].textContent;
      const price = Number(target.getElementsByClassName("product-line-price")[0].textContent);

      if (!basketObj.hasOwnProperty(name)) {
         basketObj[name] = price;
      } else {
         basketObj[name] = basketObj[name] + price;
      }
      textResult.textContent += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
   }

   function checkOutFunc(event) {
      let sum = 0;
      let products = [];
      for (let product of Object.entries(basketObj)) {
         sum += product[1];

         if (!products.includes(product[0])) {
            products.push(product[0]);
         }
      }
      products = products.join(", ");
      textResult.textContent += `You bought ${products} for ${sum.toFixed(2)}.`;

      for (let i = 0; i < PRODUCTS.length; i++) {
         let product_add = PRODUCTS[i].children[2];
         let addBtn = product_add.getElementsByTagName("button")[0];
   
         addBtn.removeEventListener("click", addFunc);
      }
      checkOut.removeEventListener("click", checkOutFunc);
   }
}