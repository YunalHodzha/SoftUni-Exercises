function solve() {
  let input = document.getElementById("text").value;
  let convention = document.getElementById("naming-convention").value;

  if (convention === "Camel Case") {
    input = input.toLowerCase().split(" ");
    input = input.map((x) => x[0].toUpperCase() + x.slice(1)).join("");
    input = input[0].toLowerCase() + input.slice(1);

    document.getElementById("result").textContent = input;
  } else if (convention === "Pascal Case") {
    input = input.toLowerCase().split(" ");
    input = input.map((x) => x[0].toUpperCase() + x.slice(1)).join("");

    document.getElementById("result").textContent = input;
  } else {
    document.getElementById("result").textContent = "Error!";
  }
}