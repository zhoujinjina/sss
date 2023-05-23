const http=require('http')

const server=http.createServer((request,response)=>{
    console.log(request.url)
    // console.log(request.method)
    // console.log(request.headers.host)
    let body=''
    request.on('data',chunk=>{
        body+=chunk
    })
    request.on('end',()=>{
         console.log(body)
    })
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.end('你好')//设置响应体并结束
})
   
  server.listen(9000,()=>{
    console.log("服务已启动")
  })