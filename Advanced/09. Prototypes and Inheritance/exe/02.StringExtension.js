(function solve() {
    let str = 'my string';

    String.prototype.ensureStart = function (str) {
        if (this.startsWith(str)) {
            return String(this);
        }
        return newStr = str + this;
    }

    String.prototype.ensureEnd = function (str) {
        if (this.endsWith(str)) {
            return String(this);
        }
        return newStr = this + str;
    }

    String.prototype.isEmpty = function () {
        if (this === "") {
            return true;
        }
        return false;
    }

    String.prototype.truncate = function (n) {
        if (this.length < n) {
            return String(this);
        }

        if (n < 4) {
            return '.'.repeat(n);
        }

        if (this.includes(" ")) {
            let newStr = this.split(" ");
            newStr.pop();
            newStr = newStr.join(" ");
            return newStr = newStr + "...";
        }

        
    }


    str = str.ensureStart('my');
    console.log(str);
    str = str.ensureStart('hello ');
    console.log(str)
    str = str.truncate(16);
    console.log(str)
    str = str.truncate(14);
    console.log(str)
    str = str.truncate(8);
    console.log(str)
    str = str.truncate(4);
    console.log(str)
    str = str.truncate(2);
    console.log(str)
    // str = String.format('The {0} {1} fox',
    //     'quick', 'brown');
    // str = String.format('jumps {0} {1}',
    //     'dog');
})()
