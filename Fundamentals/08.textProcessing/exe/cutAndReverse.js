function proccesing(input) {
    let result = "";

    for (let i = input.length - 1; i >= 0; i--) {
        result += input[i];
    }

    let firstHalf = result.substring(0, result.length / 2);
    let secHalf = result.substring(result.length / 2);
    console.log(secHalf);
    console.log(firstHalf);
}

proccesing('tluciffiDsIsihTgnizamAoSsIsihT');
console.log("--------------");
proccesing('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');