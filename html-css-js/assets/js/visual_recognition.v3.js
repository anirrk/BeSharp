'use strict';

const VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
const fs = require('fs');

const visual_recognition = new VisualRecognitionV3({
  api_key: '441a7ba7a58fd8edf5bfa0b84e62455da5727ce3',
  version_date: '2016-05-19'
});

const params = {
  // must be a .zip file containing images
  images_file: fs.createReadStream('./selfie.JPG'),
  classifier_ids : ["fruit_1999080847"],
  threshold : 0.0
};

visual_recognition.classify(params, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(JSON.stringify(res, null, 2));
  }
});