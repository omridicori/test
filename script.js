
var math1 = 1;
var math2 = 1;
var math3 = 1;
var finaltime1;
var finaltime2;
var finaltime3;
var swimfirst;
var swimsecond;
var swimthird;
var fin1 = 0;
var fin2 = 0;
var fin3 = 0;

function startrace() {
    swimfirst = document.getElementById('swim1');
    finaltime1 = document.getElementById('finalscore1');
    window.helper.animate(swimfirst, function (swimfirst, frameNumber) {
        math1 = math1 + Math.random()*50;
        var timesecs1 =  frameNumber + math1 ;
        if (timesecs1 >= 850) {return;} else { finaltime1.innerText = [frameNumber/10]
            fin1 = [frameNumber/10];
        }
        helper.changeCss(swimfirst, 'transform: translateX(' + timesecs1 + 'px)');
    }, 100);

swimsecond = document.getElementById('swim2');
finaltime2 = document.getElementById('finalscore2');
window.helper.animate(swimsecond, function (swimsecond, frameNumber) {
    math2 = math2 + Math.random()*50;
    var timesecs2 =  frameNumber + math2 ;
    if (timesecs2 >= 850) {return;} else { finaltime2.innerText = [frameNumber/10]
        fin2 = [frameNumber/10];
    }
    helper.changeCss(swimsecond, 'transform: translateX(' + timesecs2 + 'px)');
}, 100);

swimthird = document.getElementById('swim3');
    finaltime3 = document.getElementById('finalscore3');
    window.helper.animate(swimthird, function (swimthird, frameNumber) {
        math3 = math3 + Math.random()*50;
        var timesecs3 =  frameNumber + math3 ;
        if (timesecs3 >= 850) {return;} else { finaltime3.innerText = [frameNumber/10];
        fin3 = [frameNumber/10];
        }
        helper.changeCss(swimthird, 'transform: translateX(' + timesecs3 + 'px)');
    }, 100); }
function printwinner() {
        if (fin1 < fin2) {
            console.log(fin1);
        }
    }



var go = document.getElementById('gobutton');
go.addEventListener("click",startrace, printwinner);





