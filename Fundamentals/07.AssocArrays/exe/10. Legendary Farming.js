function legendaryFarming(data) {
    let keyMaterials = new Map();
    let otherMaterials = new Map()
    keyMaterials.set("fragments", 0);
    keyMaterials.set("shards", 0);
    keyMaterials.set("motes", 0);

    let dataArr = data.split(" ");

    let legendary = "";

    for (let i = 0; i < dataArr.length; i += 2) {
        let quantity = Number(dataArr[i]);
        let material = (dataArr[i + 1]).toLowerCase();

        if (keyMaterials.has(material)) {
            let currentQuantity = keyMaterials.get(material);
            keyMaterials.set(material, currentQuantity + quantity);
            if (isCollected(keyMaterials) === true) {
                break;
            }
        } else {
            if(!otherMaterials.has(material)) {
                otherMaterials.set(material, quantity);
            }else {
                let otherQuantity = otherMaterials.get(material);
                otherMaterials.set(material, otherQuantity + quantity);
            }
        }
    }

    let keyMatArray = Array.from(keyMaterials).sort((a,b) => {
        return b[1] - a[1] || a[0].localeCompare(b[0]);
    });

    let otherMatArray = Array.from(otherMaterials).sort((a,b) => {
        return a[0].localeCompare(b[0]);
    })



   console.log(`${legendary} obtained!`);
   
   for(let el of keyMatArray) {
    console.log(`${el[0]}: ${el[1]}`);
   }
   for(let el of otherMatArray) {
    console.log(`${el[0]}: ${el[1]}`);
   }

    function isCollected(keyMaterials) {
        for (let [key, value] of keyMaterials.entries()) {
            if ((key === "shards" || key === "fragments" || key === "motes") && value >= 250) {
                let newValue = keyMaterials.get(key) - 250;
                keyMaterials.set(key, newValue)
                switch (key) {
                    case "shards":
                        legendary = "Shadowmourne";
                        break;
                    case "fragments":
                        legendary = "Valanyr";
                        break;
                    case "motes":
                        legendary = "Dragonwrath";
                        break;
                }
                return true;;
            }
        }
        return false;
    }
}

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
console.log("----------------");
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')