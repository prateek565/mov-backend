 const mongoose = require('mongoose');
 
 mongoose.connect("mongodb://prateek12345:prateek12345@ac-wgbllll-shard-00-00.zytdjxc.mongodb.net:27017,ac-wgbllll-shard-00-01.zytdjxc.mongodb.net:27017,ac-wgbllll-shard-00-02.zytdjxc.mongodb.net:27017/?ssl=true&replicaSet=atlas-n93c9i-shard-0&authSource=admin&retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

 const db = mongoose.connection;
 db.on('error', console.error.bind(console, 'connection error:'));
 db.once('open', function(){
   console.log('Connected')
 });

// "mongodb://localhost:27017/todo_express"
