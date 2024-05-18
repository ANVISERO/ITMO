window.addEventListener("DOMContentLoaded", () => {
    let clock = document.getElementById("clock");
    function setTime() {
        let a = new Date();
        let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        let year = a.getFullYear();
        let month = months[a.getMonth()];
        let date = a.getDate();
        let hour = a.getHours();
        let min = a.getMinutes();
        let sec = a.getSeconds();
        if (hour >= 0 && hour <= 9) {
            hour = '0' + hour;
        }
        if (min >= 0 && min <= 9) {
            min = '0' + min;
        }
        if (sec >= 0 && sec <= 9) {
            sec = '0' + sec;
        }
        let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
        clock.innerHTML = time;
    };

    setTime();
    setInterval(setTime, 5000);
})