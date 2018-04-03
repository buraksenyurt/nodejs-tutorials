var cluster = require('cluster');
var http = require('http');
var cpuCount = 2;
var names = ['con do', 'vuki', 'lora', 'deymin', 'meyk', 'cordi', 'klaus', 'commander', 'jenkins', 'semuel', 'fire starter'];

if (cluster.isMaster) {
    console.log('Master PID: ' + process.pid);
    for (var i = 0; i < cpuCount; i++) {
        cluster.fork();
    }

    cluster.on('fork', function (worker) {
        console.log('\tfork (worker ' + worker.process.pid + ')');
    });

    cluster.on('online', function (worker) {
        console.log('\tonline (worker ' + worker.process.pid + ')');
    })

    cluster.on('listening', function (worker, address) {
        console.log('\tlistening (worker ' + worker.id + ') pid ' + worker.process.pid + ', ' + address.address + ':' + address.port + ')');
    });

    cluster.on('exit', function (worker) {
        console.log('\texit (worker ' + worker.process.pid + ')');
    });

} else {
    console.log('Worker # has been' + process.pid + ' started.');
    http.createServer(function (req, res) {
        res.writeHead(200);
        var index = Math.floor(Math.random() * names.length) + 1;
        res.end('My name is "' + names[index - 1] + '" (pid ' + cluster.worker.process.pid + ')\n');
    }).listen(65001, "127.0.0.1");
}