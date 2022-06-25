const express=require('express');
const app=express();
const mongoose=require('mongoose');
const path=require('path');
const Movie=require('./models/product')
const method_override=require('method-override')

app.use(method_override('_method'))
app.use(express.static('public'))


app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(express.urlencoded({extended:true}))

app.listen(3000, ()=> {
    console.log('connected listening at port 3000')
})


mongoose.connect('mongodb://localhost:27017/MyApp').then( ()=>{
    console.log("connected to mongodb")
}).catch((err) =>{
    console.log('oh no error!!!!!!')
})






app.get('/movie',async (req,res)=>{
    const movie_all=await Movie.find({});
    res.render('./movies.ejs',{movie_all});
    
})




app.get('/movie/new',async (req,res)=>{
  res.render('./newMovie.ejs')
})


app.delete('/movie/:id/delete',async (req,res)=>{
    const {id}=req.params;
    const deleted=await Movie.findByIdAndDelete({_id:id});
    res.redirect('/movie/')
})


app.put('/movie/:id/edit',async (req,res)=>{

    const update=req.body;
    const {id}=req.params;
    //console.log(id)
    const updateandfind=await Movie.findByIdAndUpdate(id,update)
    res.redirect(`/movie/${id}`)


    //res.send('hello from post')
})

app.post('/movie',async (req,res)=>{
    const newMovie=await new Movie(req.body);
    newMovie.save();
    console.log(newMovie);
    res.redirect('/movie')
})

app.get('/movie/:id/edit',async (req,res)=>{
    const {id}=req.params;
    console.log(id)
    const movie=await Movie.findById(id);
    console.log(movie)
   res.render('./edit.ejs',{movie})
})


app.get('/movie/:id',async (req,res) => {
    const {id} =  req.params;
    const r=await Movie.findById(id);
    console.log(r);
    res.render('./show.ejs',{r});
})




app.get('/testing',(req,res) => {
    console.log('hello from express');
    res.send('working correctly');
})





