function callback(index) {
 console.log("it works; " + index);
}

function loop (loops, cb) {
for(let i = 0; i < loops; i++) {
    if(i % 2) {
    } else {
        cb(i);
    }
}
}

loop(40, callback);