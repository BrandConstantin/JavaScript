var fs = require('fs')

var fileContents

fs.readFile('message.txt', 'utf8', function(err, data) {
    if (err) throw err
    fileContents = data
    console.log(fileContents)
})