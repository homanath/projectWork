let [second, minute, hour] = [0, 0, 0];
let time = document.getElementById("displayTime");
let timer = null;

function stopWatch() {
    second++;
    if (second == 60) {
        second = 0;
        minute++;
        if (minute == 60) {
            minute = 0;
            hour++;
        }
    }
    let h = hour < 10 ? "0" + hour : hour;
    let m = minute < 10 ? "0" + minute : minute;
    let s = second < 10 ? "0" + second : second;
    time.innerHTML = `${h}:${m}:${s}`;
}

function watchStart() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopWatch, 1000);
}

function watchStop() {
    clearInterval(timer);
}

function watchReset() {
    clearInterval(timer);
    [second, minute, hour] = [0, 0, 0];
    time.innerHTML = "00:00:00";
}
