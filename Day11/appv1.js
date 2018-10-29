const fs = require("fs");
const mime = require("mime");
const https = require("https");

const securityOptions = {
    key: fs.readFileSync("simpleKey.pem"),
    cert: fs.readFileSync("simpleCert.pem")
};

const handler = (req, res) => {
    console.log("[Request]", req.url);
    if (req.url === "/favicon.ico") {
        res.writeHead(200);
        res.end();
        return;
    }
    const fileName = req.url === "/" ? "index.html" : __dirname + req.url;
    fs.readFile(fileName, (err, data) => {
        if (err) {
            res.writeHead(503);
            res.end("File read error", fileName);
            return;
        }
        res.writeHead(200, { "Content-Type": mime.getType(fileName) });
        res.end(data);
    });
};
https.createServer(securityOptions, handler)
    .listen(5047, () => console.log("Server listening at 5047"));