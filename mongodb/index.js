const db=require('./db/db')
const MoviesModel = require('./models/movies')
const MoneyModel = require('./models/money')
const success=()=>{
    MoviesModel.create({
        name:'不良人',
        price:120,
        show_time:new Date()
    })
   
}
db(success,()=>{
    console.log("连接出错")
})