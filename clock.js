

let fun = setInterval(function () {
    let a = new Date()
    let hours = a.getHours();
    let minutes = a.getMinutes();
    let seconds = a.getSeconds();
    value1.innerHTML = `${hours}`;
    value2.innerHTML = `${minutes}`;
    value3.innerHTML = `${seconds}`;
}, 1000);