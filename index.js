// Libraries that probably need
var AWS = require('aws-sdk');
const play = require('audio-play');
const load = require('audio-loader');


//AWS credentials
AWS.config = new AWS.Config({
  credentials: {
      accessKeyId: '<Your Access Key>',
      secretAccessKey: '<Your secret Access Key>'
  },
  region:'us-east-1'
});

// Polly
// initialize Polly
var polly = new AWS.Polly()

// Polly params
var params = {
  OutputFormat: "mp3", 
  Text: "Hi I'm Polly!", // This is the message that Polly reads
  TextType: "text", 
  VoiceId: "Kendra" // You could choose the Voice
};

// Lets Polly speak
  polly.synthesizeSpeech(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     load(data.AudioStream).then(play);           // successful response
  });
