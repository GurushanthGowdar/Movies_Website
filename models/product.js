const mongoose= require("mongoose");

const MovieSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    year_released:{
        type:Number,
        required:true,
    },
    language :{
        type:String,
        required:true
    },
    rating :{
        type:Number,


    }
})

const Movie=mongoose.model('movie_database',MovieSchema);

module.exports=Movie;