function solve() {
  const output = document.getElementById("output");
  const textArea = document.getElementById("input");
  let textAreaValue = textArea.value;
  textAreaValue = textAreaValue
    .split(".")
    .filter((s) => s !== "")
    .map((s) => s + ".");

  const paragraphCap = Math.ceil(textAreaValue.length / 3);

  for (let i = 0; i < paragraphCap; i++) {
    const joinedSentences = textAreaValue.splice(0, 3).join("");
    output.innerHTML +=( `<p>${joinedSentences}</p>`);
  }
}