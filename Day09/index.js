const ipcRenderer = require('electron').ipcRenderer;
var btnClick = document.getElementById('button-hello');

btnClick.addEventListener('click', () => {
    var name = document.getElementById('text-name').value
    ipcRenderer.send("btnclick", name)
})

ipcRenderer.on('btnclick-task-finished', (event, param) => {
    var div = document.getElementById('div-response')
    div.innerText = param
});