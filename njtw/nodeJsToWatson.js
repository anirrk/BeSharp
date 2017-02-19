
var express = require('express'),
    multer  = require('multer')

var app = express()
app.use(multer({ dest: './uploads/'}))

app.get('/', function(req, res){
  res.send('hello world');
});

app.post('/upload', function(req, res){
    console.log(req.body) // form fields
    console.log(req.files) // form files
    // res.status(204).end()
    res.send("upload worked");  
});

app.listen(3000);

// var express = require('express')
// var    multer  = require('multer')
// var upload = multer({ dest: 'uploads/' })

// var app = express()

// app.get('/', function(req, res){
//   res.send('hello world');
// });

// // app.post('/upload', upload, function(req, res){
// //     console.log(req.body) // form fields
// //     console.log(req.files) // form files
// //     res.status(204).end()
// // });

// // app.post('/upload', upload.array(), function (req, res, next) {
// //   // req.body contains the text fields
// // })



// app.post('/upload',function(req,res){
//     console.log('FIRST TEST: ' + JSON.stringify(req.files));
//     console.log('second TEST: ' +req.files.theFile.name);
//     fs.readFile(req.files.theFile.path, function (err, data) {
//         var newPath = "/home/path/to/your/directory/"+req.files.theFile.name;
//         fs.writeFile(newPath, data, function (err) {
//           res.send("hi");  
//         });
//     });
// });

// // app.post('/upload', function (req, res) {
// // 	// console.log(req);
// // 	// console.log(res);
// // 	// console.log(req.files);
// // 	console.log(req.body);

// // 	    var tempPath = req.files.file.path,
// // 	        targetPath = path.resolve('./uploads/image.png');
// // 	    if (path.extname(req.files.file.name).toLowerCase() === '.png') {
// // 	        fs.rename(tempPath, targetPath, function(err) {
// // 	            if (err) throw err;
// // 	            console.log("Upload completed!");
// // 	        });
// // 	    } else {
// // 	        fs.unlink(tempPath, function () {
// // 	            if (err) throw err;
// // 	            console.error("Only .png files are allowed!");
// // 	        });
// // 	    }
// // 	    // ...
// // 	});


// app.listen(3000);

// // express.get('/', function (req, res) {
// //   'use strict';

// // 	const VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
// // 	const fs = require('fs');

// // 	const visual_recognition = new VisualRecognitionV3({
// // 	  api_key: '441a7ba7a58fd8edf5bfa0b84e62455da5727ce3',
// // 	  version_date: '2016-05-19'
// // 	});

// // 	const params = {
// // 	  // must be a .zip file containing images
// // 	  images_file: fs.createReadStream('./selfie.JPG'),
// // 	  classifier_ids : ["fruit_1999080847"],
// // 	  threshold : 0.0
// // 	};

// // 	visual_recognition.classify(params, function(err, responds) {
// // 	  if (err) {
// // 	    res.send(err);
// // 	  } else {
// // 	    res.send(responds);
// // 	  }
// // 	});
// // })

// // // app.use(express.bodyParser({uploadDir:'.'}));
// // app.listen(3000)

