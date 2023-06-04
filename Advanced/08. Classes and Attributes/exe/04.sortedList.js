class List {

    constructor() {
        this.myList = [];
        this.size = this.myList.length;
    }

    add(element) {
        this.myList.push(element);
        this.size++;
        this.myList.sort((a, b) => a - b);
    }

    get(index) {
        if (index < 0 || index >= this.myList.length) {
            throw new Error("Error");
        }
        return this.myList[index];
    }

    remove(index) {
        if (index < 0 || index >= this.myList.length) {
            throw new Error("Error");
        }
        this.size--;
        this.myList.sort((a, b) => a - b);
        return this.myList.splice(index, 1);
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
