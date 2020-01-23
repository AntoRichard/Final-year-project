var textract = require('textract');

textract.fromFileWithPath('/home/sys69/Projects/Exam Eval Sys/server/images/dummy.jpeg', function( error, text ) {
    if(error) throw error;
    console.log('in')
    console.log(text);
})