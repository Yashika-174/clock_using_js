let a = new Date();
let hours = a.getHours();
let minutes = a.getMinutes();
let seconds = a.getSeconds();
let ampm_value = 'AM';
let day_name = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday']
let days = a.getDay()
let date_value = a.toLocaleDateString();


let fun = setInterval(function () {
    a = new Date();
    hours = a.getHours();
    minutes = a.getMinutes();
    seconds = a.getSeconds();
    days = a.getDay();
    date_value = a.toLocaleDateString("en-GB");
    if (hours >= 12) {
        ampm_value = "PM";
    }
    value1.innerHTML = hours;
    value2.innerHTML = minutes;
    value3.innerHTML = seconds;
    day.innerHTML = day_name[days];
    date.innerHTML = date_value;
    ampm.innerHTML = ampm_value;
}, 1000);

