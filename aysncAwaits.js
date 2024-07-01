const marks = [44, 33, 24, 56, 76, 32, 30];

function getMarks(mark) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (mark % 2 === 0) {
                console.log(mark);
                resolve("Success");
            } else {
                console.log(mark);
                reject("failed");
            }
        },)
    });
}

async function printStudentMarks(){
    for(let i of marks){
        try {
            await getMarks(i);
            console.log("Sucess");
            
        } catch (error) {
            console.error("Failed");
        }
    }
}

printStudentMarks();