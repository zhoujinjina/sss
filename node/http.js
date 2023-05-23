const http = require("http");
const fs = require("fs");
const url = require("url");
const server = http.createServer((request, response) => {
  let url = new URL(request.url, "http://localhost");
  let pathname = url.pathname;
  let filename = __dirname + pathname;
  console.log(filename);
fs.readFile(filename, (err, data) => {
    if (err){
        console.log("出错了")
    }
    response.end(data)
  });
  
});

server.listen(9000, () => {
  console.log("服务已启动");
});
