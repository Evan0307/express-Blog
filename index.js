 const  express= require('express');
 const  app=express();
 const  path = require('path');
 const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/node-blog");
const bodyParser  = require('body-parser');
let db = mongoose.connection; 
db.once('open',function(){
   console.log('Connect to Mongodb')
})
db.on('error',function(err){
  console.log(err)
})
 const  Article = require('./models/articles');

 app.use(bodyParser.urlencoded({ extended: false }));
 app.use(express.static(path.join(__dirname,'public')))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
   app.get('/',function(req,res){

    Article.find({},function(err,articles){
      res.render('index',{
        articles,
       })
    })
      
       
   })

  app.post('/articles/create',function(req,res){
    let article = new Article(req.body);
    article.save(function(err){
      if (err){
        console.log(err);
        return ;
      } else {
        res.redirect('/');
      }

    })

    console.log('create')
  })


  app.get('/new',(req,res)=>{
   res.render('new',{
       title:'add title'
   })
  }

  )


   app.listen(8000,function(){
       console.log('server  is  start on port 8000 ')
   })