const express=require('express')
const fs=require('fs')
const app=express()

const   bodyParser=require('body-parser')
//解析JSON格式的请求体中间件
const jsonParser=bodyParser.json()
//解析queryString格式请求体的中间件
const urlencodeParser=bodyParser.urlencoded({extended:false})
//全局中间件
function recordMiddleware(req, res, next) {
    console.log(req.get('referer'))
    const {path,ip}=req
    fs.appendFileSync(__dirname+'/access.log',`${path} ${ip} ${new Date().toLocaleDateString()}`,(err)={
        if(err){
            console.log(err)
        }
    }) //
    next()
}
//静态中间件
app.use(express.static(__dirname))
//路由中间件
 const checkMiddleware = (req, res, next) =>{
    if(req.query.code&&req.query.code==520){
        next()
    }else{
        res.end('<h1>not</h1>')
    }
    
 }
app.use(recordMiddleware)

app.get('/login', (req, res) => {
   
    res.end('hello')
    
})
app.get('/',checkMiddleware,(req,res) => {
    res.send('欢迎来到首页')
    res.end()
})

app.get('/html',checkMiddleware, (req, res) => {
    res.sendFile(__dirname+'/http.html')

})
app.all('*',checkMiddleware, (req, res) => {
    res.end('<h1>404 not found</h1>')
})
app.listen(2000,()=>{
    console.log("2000监听中")
})