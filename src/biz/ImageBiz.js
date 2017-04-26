var ImageActionCreator = require('../actionCreator/ImageActionCreator');

var c = 0
var t

function timedCount() {
    
    c = c + 1
    console.log("timedCount:" + c);
    switch (c % 2){
        case 0:
            ImageActionCreator.receiveImage("https://img2.csmall.com/webPublicity/548b69fdfb2ea.jpg");
            break;
        case 1:
            ImageActionCreator.receiveImage("https://img2.csmall.com/webPublicity/548b6a0638c77.jpg");
            break;
    }

    t = setTimeout("timedCount()", 2000)
}
window.timedCount = timedCount;


function initImage() {
    console.log("initImage");
    timedCount();
}

module.exports = {
    initImage: initImage
};