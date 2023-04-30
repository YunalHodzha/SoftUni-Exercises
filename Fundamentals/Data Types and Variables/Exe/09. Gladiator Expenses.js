function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice){
    let sum = 0;
    let brokenHelmet = false;
    let brokenSword = false;
    let shieldCounter = 1;

    for (let i = 1; i <= lostFights; i++ ){
        if(i % 2 === 0 && brokenHelmet == false){
            sum += helmetPrice;
            brokenHelmet = true;
            
        }else if(i % 3 === 0 && brokenSword == false){
            sum += swordPrice;
            brokenSword = true;
            continue;
        }

        if(brokenHelmet && brokenSword){
            sum += shieldPrice;
            shieldCounter++;
            brokenHelmet = false;
            brokenSword = false;
        }
        if(shieldCounter == 2){
            sum += armorPrice;
            shieldCounter = 1;
            brokenHelmet = false;
            brokenSword = false;
        }
    }
    console.log(`${sum.toFixed(2)} aureus`)
}

gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200
    );