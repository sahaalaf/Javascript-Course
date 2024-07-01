const marks = [45, 34, 23, 56, 76, 32, 31];

function getMarks(mark) {
    return new Promise((resolve, reject) => {
        if (mark % 2 === 0) {
            console.log(mark);
            resolve("Success");
        } else {
            console.log(mark);
            reject("failed");
        }
    });
}

for (let i of marks) {
    getMarks(i)
        .then(() => {
            console.log("Promised Success.");
        })
        .catch(() => {
            console.log("Promised Failed.");
        });
}
