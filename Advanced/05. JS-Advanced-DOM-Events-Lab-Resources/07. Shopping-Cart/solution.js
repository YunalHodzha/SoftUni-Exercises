function solve() {
   const products = document.getElementsByClassName("product");
   
   
   for(let i = 0; i <products.length; i++) {
      let product_add = products[i].children[2];
      let addBtn = product_add.getElementsByTagName("button")[0];

      console.log(addBtn)
   }


   console.log(products);
}