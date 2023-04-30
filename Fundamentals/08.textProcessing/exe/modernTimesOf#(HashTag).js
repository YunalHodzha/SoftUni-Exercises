function processing(input) {
    let text = input.split(" ");
    let words = [];

    for (let el of text) {
        if (el.includes("#") && el.length > 1) {
            let isTrue = false;
            el = el.substring(1);
            for (let ch of el) {
                ch.toLowerCase();
                if (ch.charCodeAt(0) >= 97 && ch.charCodeAt(0) <= 122) {
                    isTrue = true;
                } else {
                    break;
                }
            }
            if (isTrue === true) {
                words.push(el);
            }
        }
    }
    console.log(words.join("\n"))
}

processing('Nowadays everyone uses # to tag a #special word in #socialMedia');
console.log("--------------");
processing('The symbol # is known #variously in English-speaking #regions as the #number sign');