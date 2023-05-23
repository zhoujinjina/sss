const mongoose=require('mongoose');

let MoneySchema=new mongoose.Schema({
    name:String,
    totals:Number,
})
 let MoviesModel=mongoose.model('money',MoneySchema)

 module.exports=MoviesModel