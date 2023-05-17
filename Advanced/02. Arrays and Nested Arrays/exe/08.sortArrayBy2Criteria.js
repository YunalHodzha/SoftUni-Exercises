function sortArr(arr) {
    arr.sort((a, b) => {
        a = a.toLowerCase();
        b = b.toLowerCase();
        if (a.length !== b.length) {
            return a.length - b.length
        };

        return a.localeCompare(b);
        
    });
    arr.forEach(item => console.log(item));
}

sortArr(['alpha', 'beta', 'gamma']);
console.log('-----------')
sortArr(['Isaac', "Theodor", "Jack", "Harrison", "George"]);
console.log('-----------')
sortArr(["test", "Deny", "omen", "Default"]);
