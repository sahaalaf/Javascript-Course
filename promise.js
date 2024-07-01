const students = [
    { id: 1, name: "Sahal" },
    { id: 2, name: "Alice" },
    { id: 3, name: "Bob" },
    { id: 4, name: "Charlie" },
    { id: 5, name: "David" },
    { id: 6, name: "Eve" }
];

function getData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Name:", students[id - 1].name, "ID:", students[id - 1].id);
            resolve("success");
        }, 2000);
    });
}

let promise = getData(1);

// status of the promise
setTimeout(() => {
    console.log(promise);
}, 6000);
