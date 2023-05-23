const http = require("http");

const server = http.createServer((request, response) => {
  let url = new URL(request.url, "http://localhost");

  // console.log(url)
  console.log(url.pathname);
  console.log(url.searchParams.get("w"));
  response.write('<table border="1"><tr>test</tr></table>')
  response.end("ni<br>hao");    
});

server.listen(9000, () => {
  console.log("listening on");
});
