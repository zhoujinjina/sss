const express=require('express');
const session=require('express-session');
const MongoStore=require('connect-mongo')
const app=express()
app.use(session({
    sessionID:"uid",
    secret: 'keyboard cat',
    saveUninitialized: false, // don't create session until something stored
    resave: true, //don't save session if unmodified
    store: MongoStore.create({
      mongoUrl: 'mongodb://127.0.0.1/bilibili',
      touchAfter: 24 * 3600 // time period in seconds
    })
  }))
app.get('/',(req,res)=>{
    res.clearCookie('name')
    res.end('Welcome')
})
app.get('/admin',(req,res)=>{
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    let {username}=req.query
   req.session.username=username
   res.end('注册成功')
})
app.get('/admin/user',(req,res)=>{
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    if(req.session.username){
        res.end(`欢迎${req.session.username}`)
    }else res.end('未登录')
})
app.get('/des',(req, res) => {
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    req.session.destroy(()=>{
        res.end('推出成功')
    })
    
})
app.get('/:id.html',(req,res)=>{
    //获取路由参数  
    console.log(req.params.id)
   res.cookie('name',"zhangsan")

    res.end(req.path)
})
 app.listen(8000,()=>{
    console.log("listening on")
 })
