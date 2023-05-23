const fs=require("fs");
 //创建流对象
 const ws=fs.createWriteStream('./观书有感.html')
 ws.write('hello world\r\n')
 ws.write('hello world\r\n')
 ws.write('hello world\r\n')
 ws.write('hello world\r\n')
 ws.close()
 fs.readFile('./观书有感',(err,data)=>{
    if(err){
        console.log(err)
    }
    console.log(data.toString())
 })