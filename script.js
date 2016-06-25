
var math1 = 1;
var math2 = 1;
var math3 = 1;
var finaltime1;
var finaltime2;
var finaltime3;
var swimfirst;
var swimsecond;
var swimthird;

function startrace() {
    swimfirst = document.getElementById('swim1');
    finaltime1 = document.getElementById('finalscore1');
    window.helper.animate(swimfirst, function (swimfirst, frameNumber) {
        math1 = math1 + Math.random()*50;
        var timesecs1 =  frameNumber + math1 ;
        if (timesecs1 >= 850) {return;} else if (frameNumber/10  % 1 != 0) { finaltime1.innerHTML = "<p class='fin1'>" + "0" + [frameNumber/10] + "0</p>";
        } else finaltime1.innerHTML = "<p class='fin1'>" + "0" + [frameNumber/10] + ".00</p>";
        helper.changeCss(swimfirst, 'transform: translateX(' + timesecs1 + 'px)');
    }, 100);

swimsecond = document.getElementById('swim2');
finaltime2 = document.getElementById('finalscore2');
window.helper.animate(swimsecond, function (swimsecond, frameNumber) {
    math2 = math2 + Math.random()*50;
    var timesecs2 =  frameNumber + math2 ;
    if (timesecs2 >= 850) {return;} else if (frameNumber/10  % 1 != 0) { finaltime2.innerHTML = "<p class='fin2'>" + "0" + [frameNumber/10] + "0</p>";
    } else finaltime2.innerHTML = "<p class='fin2'>" + "0" + [frameNumber/10] + ".00</p>"
    helper.changeCss(swimsecond, 'transform: translateX(' + timesecs2 + 'px)');
}, 100);

swimthird = document.getElementById('swim3');
    finaltime3 = document.getElementById('finalscore3');
    window.helper.animate(swimthird, function (swimthird, frameNumber) {
        math3 = math3 + Math.random()*50;
        var timesecs3 =  frameNumber + math3 ;
        if (timesecs3 >= 850) {return;} else if (frameNumber/10  % 1 != 0) { finaltime3.innerHTML = "<p class='fin3'>" + "0" + [frameNumber/10] + "0</p>";
        } else finaltime3.innerHTML = "<p class='fin3'>" + "0" + [frameNumber/10] + ".00</p>"
        helper.changeCss(swimthird, 'transform: translateX(' + timesecs3 + 'px)');
    }, 100);
    var green = document.getElementById('greenlight');
    helper.changeCss(green, 'opacity: 1.0');
    var yellow = document.getElementById('yellowlight');
    helper.changeCss(yellow, 'opacity: 0.2');
    var red = document.getElementById('redlight');
    helper.changeCss(red, 'opacity: 0.2');
}

function starter() {
    var green = document.getElementById('greenlight');
    helper.changeCss(green, 'opacity: 1.0');
    var yellow = document.getElementById('yellowlight');
    helper.changeCss(yellow, 'opacity: 0.2');
    var red = document.getElementById('redlight');
    helper.changeCss(red, 'opacity: 0.2');
    go.dispatchEvent(startrace());
}

var go = document.getElementById('gobutton');
go.addEventListener("click",startrace);

var trafficlight = document.getElementById('light');
trafficlight.addEventListener("click",starter);









