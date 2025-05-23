let total = 0;
let count = 0;
let exceptional = false;
//const grades = [10, 12, 8, 1000, -1, 10]
const grades = [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60]

for (let index = 0; index < grades.length; index ++){
    let grade = grades [index]

    switch (grade) {
        case -1:
            console.log ('This student couldnt present this test')
            break;
        case 1000:
            console.log ('Exceptional student, average is 100')
            exceptional = true;
            break;
        default:
            total += grade;
            count++;
            break;

    }

    if (exceptional === true) {
        break;
    }


}

if (exceptional === false) {
    const average = count > 0 ? total / count : 0;
    console.log(`Average score: ${average}`);

}

