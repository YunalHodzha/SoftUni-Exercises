class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        if (this.space === 0) {
            throw new Error("Not enough space in the cellar.");
        }

        this.wines.push({
            wineName,
            wineType,
            price,
            paid: false,
        })

        this.space -= 1;
        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }

    payWineBottle(wineName, price) {
        let foundWine = null;
        for (let wine of this.wines) {
            if (wine.wineName === wineName) {
                foundWine = wine;
                break;
            }
        }
        if (foundWine === null) {
            throw new Error(`${wineName} is not in the cellar.`);
        }

        if (foundWine.paid === true) {
            throw new Error(`${wineName} has already been paid.`)
        }

        foundWine.paid = true;
        this.bill += price;
        return `You bought a ${wineName} for a ${price}$.`;
    }

    openBottle(wineName) {
        let foundWine = null;
        for (let wine of this.wines) {
            if (wine.wineName === wineName) {
                foundWine = wine;
                break;
            }
        }

        if (foundWine === null) {
            throw new Error(`The wine, you're looking for, is not found.`);
        }

        if (foundWine.paid === false) {
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        }

        this.wines.filter((x) => x.wineName !== wineName);
        return `You drank a bottle of ${wineName}.`;
    }

    cellarRevision(wineType) {
        if (arguments.length > 0) {

            let foundWine = null;
            for (let wine of this.wines) {
                if (wine.wineType === wineType) {
                    foundWine = wine;
                    break;
                }
            }
            if (foundWine !== null) {
                let isPaid = foundWine.paid === true ? `Has Paid` : `Not Paid`;
                return `${foundWine.wineName} > ${foundWine.wineType} - ${isPaid}.`;
            } else {
                `There is no ${wineType} in the cellar.`
            }
        } else {
            let result = `You have space for ${this.space} bottles more.\nYou paid ${this.bill}$ for the wine.\n`;

            let sortedArr = this.wines.sort((a, b) => {
                return a.wineName.localeCompare(b.wineName);
            })


            for (let wine of sortedArr) {
                let isPaid = wine.paid === true ? `Has Paid` : `Not Paid`;
                result += `${wine.wineName} > ${wine.wineType} - ${isPaid}.\n`;
            }

            return result.trim();
        }
    }
}

const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());
