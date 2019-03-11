var fs = require('fs');
const path = require('path');
const Base64 = require('js-base64').Base64;
const bufferToUint8Array = require('buffer-to-uint8array');

// function to encode file data to base64 encoded string
function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string

    return new Buffer (bitmap).toString('base64');
}

// function to create file from base64 encoded string
function base64_decode(base64str, path1) {
   
   path1 = path.dirname(__dirname,path1);
    // create buffer object from base64 encoded string, it is important to tell the constructor that the string is base64 encoded
    var bitmap = new Buffer(base64str, 'base64');
    // write buffer to file
    fs.writeFileSync(file, bitmap);
    console.log('******** File created from base64 encoded string ********');
}

// convert image to base64 encoded string
// var base64str = base64_encode('kitten.jpg');
// console.log(base64str);
// convert base64 string back to image 
// base64_decode(base64str, 'copy.jpg');


module.exports = {
    base64_encode,
    base64_decode
}