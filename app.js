const express=require("express");
const cors = require('cors');
let {PythonShell} = require('python-shell')
var app = express();
 
app.use(cors())

app.get('/',function(req,res){
	
  let options = {
    mode: 'text',
    pythonPath: '',
    pythonOptions: ['-u'], // get print results in real-time
    scriptPath: './',
    args: ["{\"Parrain 1\": [\"Laureat 4\", \"Laureat 21\", \"Laureat 34\", \"Laureat 17\", \"Laureat 24\", \"Laureat 27\"], \"Parrain 2\": [\"Laureat 16\", \"Laureat 4\", \"Laureat 7\", \"Laureat 18\", \"Laureat 30\", \"Laureat 22\"], \"Parrain 3\": [\"Laureat 17\", \"Laureat 23\", \"Laureat 19\", \"Laureat 10\", \"Laureat 6\", \"Laureat 30\"], \"Parrain 4\": [\"Laureat 37\", \"Laureat 14\", \"Laureat 28\", \"Laureat 29\", \"Laureat 20\", \"Laureat 3\"], \"Parrain 5\": [\"Laureat 18\", \"Laureat 5\", \"Laureat 33\", \"Laureat 12\", \"Laureat 29\", \"Laureat 21\"], \"Parrain 6\": [\"Laureat 29\", \"Laureat 9\", \"Laureat 17\", \"Laureat 28\", \"Laureat 34\", \"Laureat 33\"], \"Parrain 7\": [\"Laureat 24\", \"Laureat 40\", \"Laureat 28\", \"Laureat 13\", \"Laureat 8\", \"Laureat 37\"], \"Parrain 8\": [\"Laureat 14\", \"Laureat 1\", \"Laureat 33\", \"Laureat 3\", \"Laureat 4\", \"Laureat 15\"], \"Parrain 9\": [\"Laureat 32\", \"Laureat 28\", \"Laureat 14\", \"Laureat 25\", \"Laureat 11\", \"Laureat 26\"], \"Parrain 10\": [\"Laureat 38\", \"Laureat 21\", \"Laureat 17\", \"Laureat 4\", \"Laureat 12\", \"Laureat 3\"], \"Parrain 11\": [\"Laureat 11\", \"Laureat 32\", \"Laureat 38\", \"Laureat 23\", \"Laureat 30\", \"Laureat 40\"], \"Parrain 12\": [\"Laureat 16\", \"Laureat 39\", \"Laureat 36\", \"Laureat 33\", \"Laureat 13\", \"Laureat 4\"], \"Parrain 13\": [\"Laureat 2\", \"Laureat 14\", \"Laureat 10\", \"Laureat 11\", \"Laureat 12\", \"Laureat 33\"], \"Parrain 14\": [\"Laureat 5\", \"Laureat 1\", \"Laureat 8\", \"Laureat 7\", \"Laureat 17\", \"Laureat 32\"], \"Parrain 15\": [\"Laureat 20\", \"Laureat 7\", \"Laureat 8\", \"Laureat 34\", \"Laureat 30\", \"Laureat 29\"], \"Parrain 16\": [\"Laureat 25\", \"Laureat 21\", \"Laureat 17\", \"Laureat 18\", \"Laureat 36\", \"Laureat 27\"], \"Parrain 17\": [\"Laureat 6\", \"Laureat 16\", \"Laureat 32\", \"Laureat 13\", \"Laureat 27\", \"Laureat 29\"], \"Parrain 18\": [\"Laureat 24\", \"Laureat 12\", \"Laureat 33\", \"Laureat 27\", \"Laureat 32\", \"Laureat 17\"], \"Parrain 19\": [\"Laureat 4\", \"Laureat 15\", \"Laureat 7\", \"Laureat 20\", \"Laureat 8\", \"Laureat 23\"], \"Parrain 20\": [\"Laureat 11\", \"Laureat 29\", \"Laureat 31\", \"Laureat 39\", \"Laureat 27\", \"Laureat 38\"], \"Parrain 21\": [\"Laureat 5\", \"Laureat 7\", \"Laureat 31\", \"Laureat 35\", \"Laureat 10\", \"Laureat 9\"], \"Parrain 22\": [\"Laureat 36\", \"Laureat 33\", \"Laureat 23\", \"Laureat 37\", \"Laureat 13\", \"Laureat 32\"], \"Parrain 23\": [\"Laureat 1\", \"Laureat 13\", \"Laureat 26\", \"Laureat 22\", \"Laureat 20\", \"Laureat 17\"], \"Parrain 24\": [\"Laureat 3\", \"Laureat 1\", \"Laureat 16\", \"Laureat 28\", \"Laureat 30\", \"Laureat 2\"], \"Parrain 25\": [\"Laureat 29\", \"Laureat 36\", \"Laureat 9\", \"Laureat 1\", \"Laureat 33\", \"Laureat 8\"], \"Parrain 26\": [\"Laureat 20\", \"Laureat 32\", \"Laureat 18\", \"Laureat 13\", \"Laureat 23\", \"Laureat 29\"], \"Parrain 27\": [\"Laureat 7\", \"Laureat 34\", \"Laureat 14\", \"Laureat 12\", \"Laureat 20\", \"Laureat 28\"], \"Parrain 28\": [\"Laureat 26\", \"Laureat 21\", \"Laureat 11\", \"Laureat 23\", \"Laureat 6\", \"Laureat 15\"], \"Parrain 29\": [\"Laureat 40\", \"Laureat 15\", \"Laureat 22\", \"Laureat 18\", \"Laureat 6\", \"Laureat 38\"], \"Parrain 30\": [\"Laureat 21\", \"Laureat 7\", \"Laureat 13\", \"Laureat 10\", \"Laureat 30\", \"Laureat 23\"], \"Parrain 31\": [\"Laureat 20\", \"Laureat 32\", \"Laureat 1\", \"Laureat 15\", \"Laureat 21\", \"Laureat 33\"], \"Parrain 32\": [\"Laureat 32\", \"Laureat 11\", \"Laureat 31\", \"Laureat 34\", \"Laureat 30\", \"Laureat 37\"], \"Parrain 33\": [\"Laureat 15\", \"Laureat 29\", \"Laureat 9\", \"Laureat 40\", \"Laureat 5\", \"Laureat 6\"], \"Parrain 34\": [\"Laureat 34\", \"Laureat 15\", \"Laureat 6\", \"Laureat 1\", \"Laureat 18\", \"Laureat 23\"], \"Parrain 35\": [\"Laureat 21\", \"Laureat 29\", \"Laureat 19\", \"Laureat 31\", \"Laureat 30\", \"Laureat 12\"], \"Parrain 36\": [\"Laureat 18\", \"Laureat 1\", \"Laureat 9\", \"Laureat 24\", \"Laureat 14\", \"Laureat 29\"], \"Parrain 37\": [\"Laureat 37\", \"Laureat 36\", \"Laureat 14\", \"Laureat 1\", \"Laureat 7\", \"Laureat 24\"], \"Parrain 38\": [\"Laureat 35\", \"Laureat 17\", \"Laureat 5\", \"Laureat 30\", \"Laureat 34\", \"Laureat 20\"], \"Parrain 39\": [\"Laureat 15\", \"Laureat 26\", \"Laureat 33\", \"Laureat 7\", \"Laureat 20\", \"Laureat 13\"], \"Parrain 40\": [\"Laureat 25\", \"Laureat 14\", \"Laureat 13\", \"Laureat 3\", \"Laureat 24\", \"Laureat 40\"]}"]
  };
  
  PythonShell.run('algorithm.py', options, function (err, results) {
    if (err) throw err;
    // results is an array consisting of messages collected during execution
    console.log('results: %j', results);
    res.send(results);
  });
})
app.listen(process.env.PORT||3000 ,function(){
	console.log("server started");
});