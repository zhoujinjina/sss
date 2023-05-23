const mongoose=require('mongoose');

let MoviesSchema=new mongoose.Schema({
    name:String,
    price:Number,
    show_time:Date
})
 let MoviesModel=mongoose.model('movies',MoviesSchema)

 module.exports=MoviesModel