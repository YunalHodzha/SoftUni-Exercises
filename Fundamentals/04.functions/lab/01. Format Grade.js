function formatGrade(num) {
    let grade;
    
    if(num < 3) {
        grade = `Fail (2)`;
    }else if(num >= 3 && num <3.5) {
        grade = `Poor (${num.toFixed(2)})`;
    }else if(num >= 3.5 && num < 4.5) {
        grade = `Good (${num.toFixed(2)})`;
    }else if(num >= 4.5 && num < 5.5) {
        grade = `Very good (${num.toFixed(2)})`;
    }else {
        grade = `Excellent (${num.toFixed(2)})`;
    }

    console.log(grade);
}

formatGrade(2.50)