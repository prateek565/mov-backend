const express=require('express');;
const cors =require('cors');
var Model = require('./model/favschema');

const app = express()


app.use(express.json());
app.use(cors()); 

app.use(express.static('public')); 
const port = process.env.PORT || 5000;

require('dotenv').config(); 
require("./model/database");


app.post('/', (req, res) => {
console.log(req.body.id);
var newStudent = new Model( req.body);

   newStudent.save(function(err, data){
       if(err){
           console.log(error);
       }
       else{
           res.send("Data inserted");
       }
   });

})

app.get('/findall', function(req, res) {
  Model.find(function(err, data) {
      if(err){
          console.log(err);
      }
      else{
          res.send(data);
      }
  });  
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
