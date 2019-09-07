 const  express= require('express');


 const  app=express();
   app.get('/',function(req,res){
       res.send('hello.word')
   })


   app.listen(8000,function(){
       console.log('server  is  start on port 5000 ')
   })