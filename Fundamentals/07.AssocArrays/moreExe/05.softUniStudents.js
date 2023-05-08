function softUniStudents(arr) {

    let namePattern = /(?<name>^user[0-9]+)/;
    let creditsPattern = /\[(?<credit>[0-9]+)]/;
    let emailPattern = /(?<email>user[0-9]+@user.com)/;
    let coursePattern = /joins (?<course>[\w\W]+$)/;

    let softUni = { courses: {}, students: {} };

    for (let data of arr) {
        if (data.split(": ").length === 2) {
            let [course, capacity] = data.split(": ");
            capacity = Number(capacity);

            if (!softUni.courses.hasOwnProperty(course)) {
                softUni.courses[course] = capacity;
            } else {
                let currentCapacity = softUni.courses[course];
                softUni.courses[course] = capacity + currentCapacity;
            };
        } else {
            let user = namePattern.exec(data).groups["name"];
            let credit = creditsPattern.exec(data).groups["credit"];
            let course = coursePattern.exec(data).groups["course"];
            let email = emailPattern.exec(data).groups["email"];

            
        }
    }
}

softUniStudents([
    'JavaBasics: 2',
    'user1[25] with email user1@user.com joins C#Basics',
    'C#Advanced: 3',
    'JSCore: 4',
    'user2[30] with email user2@user.com joins C#Basics',
    'user13[50] with email user13@user.com joins JSCore',
    'user1[25] with email user1@user.com joins JSCore',
    'user8[18] with email user8@user.com joins C#Advanced',
    'user6[85] with email user6@user.com joins JSCore',
    'JSCore: 2',
    'user11[3] with email user11@user.com joins JavaBasics',
    'user45[105] with email user45@user.com joins JSCore',
    'user007[20] with email user007@user.com joins JSCore',
    'user700[29] with email user700@user.com joins JSCore',
    'user900[88] with email user900@user.com joins JSCore']);
console.log("---------------");

softUniStudents([
    'JavaBasics: 15',
    'user1[26] with email user1@user.com joins JavaBasics',
    'user2[36] with email user11@user.com joins JavaBasics',
    'JavaBasics: 5',
    'C#Advanced: 5',
    'user1[26] with email user1@user.com joins C#Advanced',
    'user2[36] with email user11@user.com joins C#Advanced',
    'user3[6] with email user3@user.com joins C#Advanced',
    'C#Advanced: 1',
    'JSCore: 8',
    'user23[62] with email user23@user.com joins JSCore']);
