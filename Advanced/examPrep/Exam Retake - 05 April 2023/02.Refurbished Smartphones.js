class RefurbishedSmartphones {
    constructor(retailer) {
        this.retailer = retailer;
        this.availableSmartphones = [];
        this.soldSmartphones = [];
        this.revenue = 0;
    }

    addSmartphone(model, storage, price, condition) {
        if (model === "" || storage <= 0 || price <= 0 || condition === "") {
            throw new Error("Invalid smartphone!");
        }

        this.availableSmartphones.push({
            model,
            storage,
            price,
            condition
        })
        return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`;
    }

    sellSmartphone(model, desiredStorage) {
        let smartPhone = null;
        let soldPrice = 0;
        for (let phone of this.availableSmartphones) {
            if (phone.model === model) {
                smartPhone = phone;

                //this.availableSmartphones.filter(x => x.model != model);
                this.availableSmartphones.filter(x => x.model != model);
            }
        }

        if (smartPhone === null) {
            throw new Error(`${model} was not found!`)
        }

        if (smartPhone.storage >= desiredStorage) {
            soldPrice = smartPhone.price;
        } else if (Math.abs(smartPhone.storage - desiredStorage) <= 128) {
            soldPrice = smartPhone.price - (smartPhone.price * 0.1);
        } else {
            soldPrice = smartPhone.price - (smartPhone.price * 0.2);
        }

        let storage = smartPhone.storage;
        this.soldSmartphones.push({ model, storage, soldPrice });

        this.revenue += soldPrice
        return `${model} was sold for ${soldPrice.toFixed(2)}$`;
    }

    upgradePhones() {
        let result = 'Upgraded Smartphones:\n';
        if (this.availableSmartphones.length === 0) {
            throw new Error(`There are no available smartphones!`);
        }

        for (let phone of this.availableSmartphones) {
            phone.storage *= 2;
            result += `${phone.model} / ${phone.storage} GB / ${phone.condition} condition / ${phone.price.toFixed(2)}$\n`
        }
        return result.trim();
    }

    salesJournal(criteria) {
        if (criteria !== "model" && criteria !== "storage") {
            throw new Error("Invalid criteria!");
        }
        let sortedArr = [];
        let soldCount = this.soldSmartphones.length;

        if (criteria === "storage") {
            sortedArr = this.soldSmartphones.sort((a, b) => {
                return b.storage - a.storage;
            })
        } else if (criteria === "model") {
            sortedArr = this.soldSmartphones.sort((a, b) => {
                return a.model.localeCompare(b.model);
            })
        }

        let result = `${this.retailer} has a total income of ${this.revenue.toFixed(2)}$\n`;
        result += `${soldCount} smartphones sold:\n`;

        for (let phone of sortedArr) {
            result += `${phone.model} / ${phone.storage}GB / ${phone.soldPrice.toFixed(2)}$\n`;
        }

        return result.trim();
    }
}

let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
retailer.sellSmartphone('Samsung S20 Ultra', 256);
retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256);
console.log(retailer.salesJournal('model'));
