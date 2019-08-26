# Polly
How to use Polly AWS with Node.js

## Install
npm install

## Usage
node index.js

If you want to change the text or the voice you coukd do so, on the index file over the params object 

```
// Polly params
var params = {
  OutputFormat: "mp3", 
  Text: "Hi I'm Polly!", // This is the message that Polly reads
  TextType: "text", 
  VoiceId: "Kendra" // You could choose the Voice
};
```
