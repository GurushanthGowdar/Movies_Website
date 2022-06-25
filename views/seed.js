const mongoose=require('mongoose');
const Movie=require('../models/product')

mongoose.connect('mongodb://localhost:27017/MyApp').then( ()=>{
    console.log("connected to mongodb")
}).catch((err) =>{
    console.log('oh no error!!!!!!')
})

const movie=[{
    title:'vk',
    year_released:2022,
    language:'kannada',
    rating:5
},
{
    title:'kf',
    year_released:2022,
    language:'hindi',
    rating:5
},
{
    title:'st',
    year_released:2017,
    language:'englis',
    rating:5
},
{
    title:'Bhaubali',
    year_released:2019,
    language:'telugu',
    rating:5
},
{
    title:'Aashique',
    year_released:2012,
    language:'hindi',
    rating:5
},
{
    title:'Radhe',
    year_released:2021,
    language:'hindi',
    rating:0
},

]

Movie.insertMany(movie)
.then((m)=>{
    console.log(m)
}).catch((e)=>{
    console.log(e)
})

