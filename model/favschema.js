var mongoose=require('mongoose');
 
var StudentSchema = new mongoose.Schema({
  id:String,
});
 
module.exports = mongoose.model(
    'student', StudentSchema, 'Students');