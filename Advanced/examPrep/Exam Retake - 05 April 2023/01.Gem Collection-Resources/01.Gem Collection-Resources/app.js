window.addEventListener("load", solve);

function solve() {
    //capturing DOM elements
    const gemStoneInput = document.getElementById("gem-name");
    const colorInput = document.getElementById("color");
    const caratsInput = document.getElementById("carats");
    const priceInput = document.getElementById("price");
    const selectInput = document.getElementById("type");

    const previewUlElement = document.getElementById("preview-list");
    const collectionUlEmenet = document.getElementById("collection");

    let addBtn = document.getElementById("add-btn");
    addBtn.addEventListener("click", addPost)


    function addPost(e) {
        e.preventDefault();

         
    }
} 