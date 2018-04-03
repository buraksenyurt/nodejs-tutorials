var cluster = require('cluster');

if (cluster.isMaster) {
    console.log('Master process ' + process.pid);
    for (var i = 0; i < 4; i++) {
        console.log('Worker #' + i + ' is starting.');
        cluster.fork();
    }

    cluster.on('fork', function (worker) {
        console.log('\tfork event (worker ' + worker.process.pid + ')');
    });

    cluster.on('online', function (worker) {
        console.log('\tonline event (worker ' + worker.process.pid + ')');
    })

    cluster.on('exit', function (worker) {
        console.log('\texit event (worker ' + worker.process.pid + ')');
    });

} else {
    console.log('Aloha. My name is worker #' + process.pid);
    cluster.worker.destroy();
}