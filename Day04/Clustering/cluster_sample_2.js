var cluster = require('cluster');
var workers = [];
var names = ['con do', 'vuki', 'lora', 'deymin', 'mayk', 'cordi', 'klaus', 'commander', 'jenkins', 'semuel', 'fire starter'];
var colors = ['red', 'green', 'blue', 'gold', 'white', 'black', 'brown', 'yellow', 'gray', 'silver'];
if (cluster.isMaster) {
    console.log('I am the process #' + process.pid);
    for (var i = 0; i < 3; i++) {
        var worker = cluster.fork();
        workers.push(worker);
        worker.on('message', function (message) {
            console.log('\t\tChild says that:' + JSON.stringify(message));
        });
        workers.forEach(function (worker) {
            var index = Math.floor(Math.random() * names.length) + 1;
            worker.send({ name: names[index - 1] });
        }, this);
    }

} else {
    console.log('Aloha. I am the worker process #' + process.pid);
    process.on('message', function (message) {
        console.log('\The boss says that: ' + JSON.stringify(message));
    });
    var index = Math.floor(Math.random() * colors.length) + 1;
    process.send({ color: colors[index - 1] });
    cluster.worker.destroy();
}