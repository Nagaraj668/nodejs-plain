const myPromise = new Promise((resolve, reject) => {
    reject();
});

myPromise
    .then(handleResolvedA)
    .catch(handleReject);


function handleResolvedA() {
    console.log('resolved A');
}

function handleReject() {
    console.log('rejected');
}
