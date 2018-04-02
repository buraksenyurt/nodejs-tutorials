var maxTime = 1000;

var sum = function (x, y, callback) {
    var waitTime = Math.floor(Math.random() * (maxTime + 1));

    if (x < 0 || y < 0) {
        setTimeout(function () {
            callback(new Error('be positive!'));
        }, waitTime);
    } else {
        setTimeout(function () {
            callback(null, x + y, waitTime);
        }, waitTime);
    }
};

var sumSync = function (x, y) {
    if (x < 0 || y < 0) {
        throw (new Error("be positive!"));
    } else {
        return (x + y);
    }
};