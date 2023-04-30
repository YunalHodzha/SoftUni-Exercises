function companyUsers(data) {
    let companies = new Map();

    for (let info of data) {
        let [company, employee] = info.split(" -> ");

        if (!companies.has(company)) {
            companies.set(company, new Set());
        }

        companies.get(company).add(employee);
    }

    let sorted = Array.from(companies).sort((a, b) => a[0].localeCompare(b[0]));

    for (let company of sorted) {
        console.log(company[0]);
        for (let employee of company[1]) {
            console.log(`-- ${employee}`);
        }
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345']);
console.log("-------------");
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111']);