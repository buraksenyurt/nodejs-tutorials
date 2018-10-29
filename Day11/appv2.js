const http2 = require("http2");
const fs = require("fs");
const mime = require("mime");

const securityOptions = {
  key: fs.readFileSync("simpleKey.pem"),
  cert: fs.readFileSync("simpleCert.pem")
};

const sendResource = (stream, fileName) => {
  const fd = fs.openSync(fileName, "r");
  const stat = fs.fstatSync(fd);
  const headers = {
    "content-length": stat.size,
    "last-modified": stat.mtime.toUTCString(),
    "content-type": mime.getType(fileName)
  };
  stream.respondWithFD(fd, headers);
  stream.on("close", () => {
    console.log("[Closing Stream]", fileName);
    fs.closeSync(fd);
  });
  stream.end();
};

const pushResource = (stream, path, fileName) => {
  stream.pushStream({ ":path": path }, (err, pushStream) => {
    if (err) {
      throw err;
    }
    console.log("[Pushing]", fileName);
    sendResource(pushStream, fileName);
  });
};

const handler = (req, res) => {
  console.log("[Request]", req.url);

  if (req.url === "/") {
    pushResource(res.stream, "style/style.css", "style.css");
    pushResource(res.stream, "scripts/jquery.js", "jquery.js");

    const images = fs.readdirSync(__dirname + "/images");
    for (let i = 0; i < images.length; i++) {
      const fileName = __dirname + "/images/" + images[i];
      const path = "images/" + images[i];
      pushResource(res.stream, path, fileName);
    }

    sendResource(res.stream, "index.html");
  } else {
    if (req.url === "/favicon.ico") {
      res.stream.respond({ ":status": 200 });
      res.stream.end();
      return;
    }
    const fileName = __dirname + req.url;
    sendResource(res.stream, fileName);
  }
};

http2.createSecureServer(securityOptions, handler)
  .listen(5048, () => {
    console.log("Server is listening on 5048");
  });