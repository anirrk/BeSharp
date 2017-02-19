var watson = require('watson-developer-cloud');
var fs = require('fs');

var visual_recognition = watson.visual_recognition({
  api_key: '441a7ba7a58fd8edf5bfa0b84e62455da5727ce3',
  version: 'v3',
  version_date: '2016-05-19'
});

var params = {
	name: 'fruit',
	  // tired_positive_examples: fs.createReadStream('./Tired.zip'),
   //  wellRested_positive_examples: fs.createReadStream('./WellRested.zip'),
   //  sleepDeprived_positive_examples: fs.createReadStream('./SD.zip'),
    classifier_id: "fruit_1999080847"
	// negative_examples: fs.createReadStream('./vegetables.zip')
};

visual_recognition.getClassifier(params,
  function(err, response) {
     if (err)
          console.log(err);
       else
      console.log(JSON.stringify(response, null, 2));
});


// visual_recognition.createClassifier(params,
// 	function(err, response) {
//    	 if (err)
//       		console.log(err);
//     	 else
//    		console.log(JSON.stringify(response, null, 2));
// });