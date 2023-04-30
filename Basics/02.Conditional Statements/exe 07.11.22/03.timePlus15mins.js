function timeAfter15Min(input) {
    let hourInput = Number(input[0]);
    let minutesInput = Number(input[1]);

    totalInputTimePlus15 = ((hourInput * 60) + minutesInput) +15;
    
    let newHour = Math.floor(totalInputTimePlus15 / 60);
    let newMinutes = totalInputTimePlus15 % 60;

    if(newHour >= 24) {
        newHour -= 24
    }
    
    if (newMinutes < 10) {
        console.log(`${newHour}:0${newMinutes}`);
    } else {
        console.log(`${newHour}:${newMinutes}`);
    }
}
 


timeAfter15Min(["12","49"])