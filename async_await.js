
async function asyncMethod() {
    var html = await someMethod();
    console.log(html);
}

asyncMethod();

function someMethod() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("hey");
        }, 3000);
    });
}
