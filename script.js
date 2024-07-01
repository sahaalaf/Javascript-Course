const students = [
    { id: 1, name: "Sahal" },
    { id: 2, name: "Alice" },
    { id: 3, name: "Bob" },
    { id: 4, name: "Charlie" },
    { id: 5, name: "David" },
    { id: 6, name: "Eve" }
];

function getData(index, getNextData) {
    setTimeout(() => {
        console.log("Name:", students[index].name, "ID:", students[index].id);
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}

getData(0, () => {
    getData(1, () => {
        getData(2, () => {
            getData(3, () => {
                getData(4, () => {
                    getData(5);
                });
            });
        });
    });
});
