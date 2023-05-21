function extractText() {
    let elements = Array.from(document.getElementsByTagName('li'));
    
    let content = [];
    elements.forEach(element => content.push(element.textContent));
    
    for (const text of content) {
        document.getElementById("result").textContent += `${text}\n` 
    }
}  