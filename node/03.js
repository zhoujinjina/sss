const fs = require('fs');

const rs=fs.createReadStream('./dj.txt')

const ws=fs.createWriteStream('./dj2.txt')

fs.readdir('../node初体验',(err,data)=>{
    if(err) throw err
    console.log(data)
    data.forEach((item,index,arr)=>{
       
        const [name,type]= item.split(".")
        arr[index]=type+name
        
    })
    console.log(data)
})