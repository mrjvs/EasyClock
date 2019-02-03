//var t = new Date("2018-10-10T00:00:00");

function updateTimer() {
    var t = new Date();
    //t = new Date("2011-10-10T" + Math.floor(Math.random() *24 - 1) + ":" + Math.floor((Math.random() * 60) - 1) + ":00");
    //t = new Date("2011-10-10T23:45:00")
    //t = new Date(t.getTime() + 60000);
    console.log(t.toDateString());
    var h = t.getHours();
    var m = t.getMinutes();
    var isEvening = h < 5 || h > 17;
    m = Math.round(m/15) * 15;
    h += m >= 30;
    m = (m === 60) ? 0 : m;
    h = (h === 0) ? 12 : h;
    h = h > 12 ? h-12 : h;


    document.getElementById("hours").innerHTML = h;
    document.getElementById("minutes").innerHTML = m === 0 ? "" : m;
    document.getElementById("minutesbefore").innerHTML = m === 0 ? "" : m;
    document.getElementById("minutes").classList = m === 15 ? "q" : (m === 45 ? "qt" : "");
    document.getElementById("minutes").classList += m === 30 ? "hide" : "";

    if (m === 15) {
        document.getElementById("minutesbefore").classList = document.getElementById("minutes").classList;
        document.getElementById("minutes").classList = "hide";
    } else {
        document.getElementById("minutesbefore").classList = "hide";
    }

    document.getElementById("hours").classList = m === 30 ? "h" : "";
    document.body.classList = isEvening ? "night" : "";
}

setInterval(updateTimer, 100);
updateTimer();