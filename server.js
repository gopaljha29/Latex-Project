/**
 * Created by manishp on 18-11-2017.
 */
var express = require('express');
var bodyParser = require('body-parser');
var app     = express();
var fs = require('fs');

//Note that in version 4 of express, express.bodyParser() was
//deprecated in favor of a separate 'body-parser' module.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

//app.use(express.bodyParser());

app.post('/myaction', function(req, res) {
    console.log("Got a request");
    //res.send('You sent the name "' + req.body.author_name + '".');
    console.log(req.body.author_name);

    author_name = req.body.author_name;
    department = req.body.department;
    prof_name = req.body.prof_name;
    sub_date = req.body.sub_date;
    title = req.body.title;

    var stream = fs.createWriteStream("my_file.txt");
    stream.once('open', function(fd) {

        stream.write(author_name+'\n');
        stream.write(department+'\n');
        stream.write(prof_name+'\n');
        stream.write(sub_date+'\n');
        stream.write(title+'\n');

        stream.end();
    });
});



app.listen(3005, function() {
    console.log('Server running at http://127.0.0.1:3005/');
});